import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = null;
    this.sliderData = null;
    this.#render();
  }

  #makeSlideLayout(product) {
    return `
     <div class="carousel__slide" data-id="${product.id}">
        <img src="/assets/images/carousel/${
          product.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${product.price.toFixed(2)}</span>
          <div class="carousel__title">${product.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`;
  }

  #makeSlidesLayout({ products }) {
    return products.map((product) => this.#makeSlideLayout(product)).join("");
  }

  #initalizeSlider = () => {
    this.sliderData = {
      maxlength: this.slides.length - 1,
      iterationQty: 0,
      leftButton: this.elem.querySelector(".carousel__arrow_left"),
      rightButton: this.elem.querySelector(".carousel__arrow_right"),
      carouselInner: this.elem.querySelector(".carousel__inner"),
    };
  };

  #moveSingleSlide() {
    
    this.sliderData.carouselInner.style.transform = `translateX(${
      -this.sliderData.carouselInner.offsetWidth * this.sliderData.iterationQty
    }px`;
  }

  #moveSlider = (event) => {
    if (
      event.target
        .closest(".carousel__arrow")
        .classList.contains("carousel__arrow_right")
    ) {
      this.sliderData.iterationQty++;
      this.#moveSingleSlide();
      this.#setButtonVisibility();
    } else {
      this.sliderData.iterationQty--;
      this.#moveSingleSlide();
      this.#setButtonVisibility();
    }
  };

  #setButtonVisibility = () => {
    if (this.sliderData.iterationQty == this.sliderData.maxlength) {
      this.sliderData.rightButton.style.display = "none";
    } else {
      this.sliderData.rightButton.style.display = "";
    }
    if (this.sliderData.iterationQty == 0) {
      this.sliderData.leftButton.style.display = "none";
    } else {
      this.sliderData.leftButton.style.display = "";
    }
  };

  #activateSlider() {
    this.sliderData.leftButton.style.display = "none";
    this.sliderData.leftButton.addEventListener("click", this.#moveSlider);
    this.sliderData.rightButton.addEventListener("click", this.#moveSlider);
  }

  #addCustomListener() {
    const buttons = this.elem.querySelectorAll(".carousel__button");
    for (let button of buttons) {
      button.addEventListener("click", this.#dsipatchCustomerEvent);
    }
  }

  #dsipatchCustomerEvent = (event) => {
    let slide = { id: null };
    slide.id = event.target.closest(".carousel__slide").dataset.id;

    this.elem.dispatchEvent(
      new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true,
      })
    );
  };

  //  ************** Основная функция создания  карусели с полным функционалом ************
  #render() {
   this.elem = createElement(`
   <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
      ${this.#makeSlidesLayout({ products: this.slides })}
    </div>
   </div>`);
    // Добавляем разметку в корневой элемент который и будет рендерится на странице.

    this.#initalizeSlider();
    this.#activateSlider(); // Добавляем возможность двигать слайдер
    this.#addCustomListener(); // Добавляем listener  для кнопок добавления в корзину
  }
}
