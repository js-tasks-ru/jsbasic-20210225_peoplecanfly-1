import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement("div");
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
    let allSlidesTemplate = "";
    for (let product of products) {
      allSlidesTemplate += this.#makeSlideLayout(product);
    }
    return allSlidesTemplate;
  }

  #moveSlide() {
    const slider = this.elem;
    const maxlength = this.slides.length - 1;
    let iterationQty = 0;
    const leftButton = slider.querySelector(".carousel__arrow_left");
    const rightButton = slider.querySelector(".carousel__arrow_right");
    const carouselInner = slider.querySelector(".carousel__inner");

    leftButton.style.display = "none";

    function moveSlide() {
      carouselInner.style.transform = `translateX(${
        -carouselInner.offsetWidth * iterationQty
      }px`;
    }

    function setButtonVisibility() {
      if (iterationQty == maxlength) {
        rightButton.style.display = "none";
      } else {
        rightButton.style.display = "";
      }

      if (iterationQty == 0) {
        leftButton.style.display = "none";
      } else {
        leftButton.style.display = "";
      }
    }

    function toMoveSlider() {
      if (this.classList.contains("carousel__arrow_right")) {
        iterationQty++;
        moveSlide();
        setButtonVisibility();
      } else {
        iterationQty--;
        moveSlide();
        setButtonVisibility();
      }
    }

    leftButton.addEventListener("click", toMoveSlider);
    rightButton.addEventListener("click", toMoveSlider);
  }

  #addCustomListener() {
    const buttons = this.elem.querySelectorAll(".carousel__button");
    
    const dsipatchCustomerEvent = (event) => {
      let slide = {id: null}
      slide.id = event.target.closest(".carousel__slide").dataset.id;
      
      this.elem.dispatchEvent(new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true,
      }));
      
      console.log(slide.id)
    };

    for (let button of buttons) {
      button.addEventListener("click", dsipatchCustomerEvent);
    }
  }

  //  ************** Основная функция создания  карусели с полным функционалом ************
  #render() {
    this.elem.classList.add("carousel");
    const template = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
      ${this.#makeSlidesLayout({ products: this.slides })}
    </div>
    `;
    // Добавляем разметку в корневой элемент который и будет рендерится на странице.
    this.elem.insertAdjacentHTML("afterbegin", template);

    this.#moveSlide(); // Добавляем возможность двигать слайдер
    this.#addCustomListener(); // Добавляем listener  для кнопок добавления в корзину
  }
}
