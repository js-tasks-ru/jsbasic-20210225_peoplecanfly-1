import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  
  constructor(product) {
    this.product = product;
    this.elem = document.createElement("div");
    this.#insertDataToElem(this.elem);
  }

  #insertDataToElem(element) {
    element.classList.add("card");
    element.insertAdjacentHTML("afterBegin", this.#insertProductData());
    const button = element.querySelector(".card__button");
    this.#addCustomEvent(button);
  }

  #insertProductData() {
    return `
    <div class="card__top">
      <img src="/assets/images/products/${
        this.product.image
      }" class="card__image" alt="product">
      <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${this.product.name}</div>
      <button type="button" class="card__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>`;
  }


// тотальная кривизна тут наверно, но я с пользователскими ивентами долго разибирался, смог только так   
  #addCustomEvent(button) {
    // пришлось оборачивать в функцию так как не понял как можно это вызвать иначе в addEventListner
    function createCustomEvent() {
      const productIdDispatch = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      });
      button.dispatchEvent(productIdDispatch); // активация события ( я так это понял )
    }

    createCustomEvent = createCustomEvent.bind(this); // this будет button если не использовать bind
    button.addEventListener("click", createCustomEvent); // тут уже просто вешаю обработчик 
  }
}
