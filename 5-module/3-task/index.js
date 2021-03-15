function initCarousel() {
  let iterationQty = 0;
  const leftButton = document.querySelector(".carousel__arrow_left");
  const rightButton = document.querySelector(".carousel__arrow_right");
  const carouselInner = document.querySelector(".carousel__inner");

  // мы уже находимся в крайнем левом положении, по этому кнопку надо сразу скрыть.
  // Если можно было бы модфицировать верстку я бы выставил по центру тогда бы не надо было кнопку скрывтать.
  rightButton.style.display = "none";

  let sliderMove = function () {
    // подумал так лучше что бы через this что бы общая функция для обоих кнопок была.
    this.classList.contains("carousel__arrow_left")
      ? iterationQty++
      : iterationQty--;
    carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * iterationQty}px)`;
    iterationQty == 3
      ? (leftButton.style.display = "none")
      : (leftButton.style.display = "");
    iterationQty == 0
      ? (rightButton.style.display = "none")
      : (rightButton.style.display = "");
  };

  leftButton.addEventListener("click", sliderMove);
  rightButton.addEventListener("click", sliderMove);
}
