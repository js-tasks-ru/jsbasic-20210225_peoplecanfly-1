import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  #categories = null;
  #ribbonInner = null;
  #leftButton = null;
  #rightButton = null;

  constructor(categories) {
    this.#categories = categories;
    this.elem = null;
    this.#render();
  }

  #render() {
    this.elem = createElement(` 
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">
          ${this.#GetRibbonItemList()}
        </nav>

        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>`);

    this.#RibbonMoveElementsInit();
    this.#moveRibbonMenu();
    this.elem.addEventListener("click", this.#removeDefault); // лучше так или вызывать функцию внутри которыой уже будет прослушка события ? 
    this.elem.addEventListener("click", this.#elementsStyleControl);
    this.#addCustomListener();
  }

  #RibbonMoveElementsInit() {
    this.#rightButton = this.elem.querySelector(".ribbon__arrow_right");
    this.#leftButton = this.elem.querySelector(".ribbon__arrow_left");
    this.#ribbonInner = this.elem.querySelector(".ribbon__inner");
    this.#leftButton.classList.remove("ribbon__arrow_visible");
    this.#rightButton.classList.add("ribbon__arrow_visible");
  }

  #GetRibbonItemList() {
    return this.#categories.map((item) => this.#getRibbonItem(item)).join("");
  }

  #getRibbonItem(item) {
    return `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`;
  }

  #moveRibbonMenu() {
    this.#rightButton.addEventListener("click", () =>
      this.#ribbonInner.scrollBy(350, 0)
    );
    this.#leftButton.addEventListener("click", () =>
      this.#ribbonInner.scrollBy(-350, 0)
    );
    this.#ribbonInner.addEventListener("scroll", this.#buttonVisibilityCheck);
  }

  #buttonVisibilityCheck = () => {
    let scrollLeft = this.#ribbonInner.scrollLeft;
    let scrollWidth = this.#ribbonInner.scrollWidth;
    let clientWidth = this.#ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (scrollRight != 0) {
      this.#rightButton.classList.add("ribbon__arrow_visible");
    } else {
      this.#rightButton.classList.remove("ribbon__arrow_visible");
    }

    if (scrollLeft != 0) {
      this.#leftButton.classList.add("ribbon__arrow_visible");
    } else {
      this.#leftButton.classList.remove("ribbon__arrow_visible");
    }
  };

  #removeDefault = (event) => {
    if (event.target.tagName == "A") {
      event.preventDefault();
    }
  };

  #elementsStyleControl = (event) => {
    if (event.target.classList.contains("ribbon__item")) {
      let ribbonElement = this.#ribbonInner.querySelector(".ribbon__item_active");
      // Не стал писать отдельную функцию для этого, а вынести этот IF от сюда нельзя так как тогда, при прокрутке слайдреа стили будут слетать. 
      if (ribbonElement) {
        ribbonElement.classList.remove("ribbon__item_active");
      }
      
      event.target.classList.add("ribbon__item_active");
    }
  };

  #addCustomListener() {
    this.elem.addEventListener("click", this.#dsipatchCustomerEvent);
  }

  #dsipatchCustomerEvent = (event) => {
    if (event.target.classList.contains("ribbon__item")) {
      const ribbonItemId = event.target.dataset.id;

      this.elem.dispatchEvent (
        new CustomEvent('ribbon-select', { 
        detail: ribbonItemId, 
        bubbles: true 
        })
      )
    }
  };
}
