import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = createElement(this.#render());
    this.#ChangeSliderStatus();
    this.#barClickListener();
  }

  #render() {
    return `<div class="slider">

    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">${this.value}</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
      ${this.#stepQty(this.steps)}
    </div>
  </div>`;
  }

  #stepQty(steps) {
    const span = "<span></span>";
    return span.repeat(steps);
  }

  #ChangeSliderStatus() {
    // присваивание стиля на спан
    let spanList = this.elem.querySelector(".slider__steps").children;
    spanList[this.value].classList.add("slider__step-active");
    // Уровень % куда надо двигать стили
    const progressStyle = (this.value * 100) / (spanList.length - 1);
    // присваивание стилей бару
    const sliderBar = this.elem.querySelector(".slider__progress");
    sliderBar.style.width = progressStyle + "%";
    //  присваивание стилей thumb
    const sliderThumb = this.elem.querySelector(".slider__thumb");
    sliderThumb.style.left = progressStyle + "%";
    //  Вставляем число под переключатель
    const sliderValue = this.elem.querySelector(".slider__value");
    sliderValue.innerText = this.value;
  }

  #barClickListener() {
    this.elem.addEventListener("click", this.#defineNewPosition);
  }

  #defineNewPosition = (event) => {
    const leftPos = event.clientX - this.elem.getBoundingClientRect().left;
    const relativePos = leftPos / this.elem.offsetWidth;
    const segments = this.steps - 1;
    const segmentPos = relativePos * segments;
    this.value = Math.round(segmentPos);
    this.#ChangeSliderStatus();
    this.#dispatchEventData();
  };

  #dispatchEventData = () => {
    this.elem.dispatchEvent(
      new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      })
    );
  };
}
