import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.body = null;
    this.title = null;
    this.documentBody = document.querySelector("body");
    this.elem = createElement(this.getTemplate);
  }

  setTitle(title) {
    this.elem.querySelector(".modal__title").innerHTML = title;
  }

  setBody(element) {
    this.elem.querySelector(".modal__body").appendChild(element);
  }

  open() {
    this.documentBody.classList.add("is-modal-open");

    this.documentBody.appendChild(this.elem);
    this.#addlisteners();
  }

  close() {
    this.documentBody.classList.remove("is-modal-open");
    if (this.documentBody.querySelector(".modal")) {
      this.documentBody.querySelector(".modal").remove;
    }
    
  }

  getTemplate = () => {
    return `<div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>
      <div class="modal__body">
      </div>
    </div>
  </div>`;
  };

  #addlisteners = () => {
    const button = this.documentBody.querySelector(".modal__close");

    button.addEventListener("click", () => {
      this.documentBody.querySelector(".modal").remove();
      this.documentBody.classList.remove("modal-open");
    });

    this.documentBody.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        this.documentBody.querySelector(".modal").remove();
        this.documentBody.classList.remove("modal-open");
      }
    });
  };
}
