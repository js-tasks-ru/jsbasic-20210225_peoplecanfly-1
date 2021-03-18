function initCarousel() {
  let iterationQty = 0;
  const leftButton = document.querySelector(".carousel__arrow_left");
  const rightButton = document.querySelector(".carousel__arrow_right");
  const carouselInner = document.querySelector(".carousel__inner");

  leftButton.style.display = "none";

  function moveSlide() {
    carouselInner.style.transform = `translateX(${-carouselInner.offsetWidth * iterationQty}px)`;
  }

  function setButtonVisibility() {
    if (iterationQty == 3) {
      rightButton.style.display = "none";
    } else{
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

