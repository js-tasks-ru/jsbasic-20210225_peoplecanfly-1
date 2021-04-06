import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {
      noNuts: false, // true/false
      vegeterianOnly: false, // true/false
      maxSpiciness: 4, // числа от 0 до 4
      category: "",
    };
    this.elem = createElement(this.#poductsWrapperTemplate());
    this.#getProductList();
  }

  #poductsWrapperTemplate = () => {
    return `
    <div class="products-grid">
      <div class="products-grid__inner">
      </div>
    </div>
    `;
  };
  // render list of products ( name of function was pre-defined)
  #getProductList = (productList = this.products) => {
    const tempElement = this.elem.querySelector(".products-grid__inner");
    tempElement.innerHTML = "";
    productList.forEach((item) => {
      const product = new ProductCard(item);
      tempElement.append(product.elem);
    });
  };

  updateFilter = (filters) => {
    Object.assign(this.filters, filters);
    // make a copy of this.products
    let productList = this.products.slice(0);
    // call function in a row to make a final list of products 
    productList = this.#nutsCheck(productList);
    productList = this.#veganCheck(productList);
    productList = this.#spicyCheck(productList);
    productList = this.#categoryCheck(productList);
    this.#getProductList(productList); // call function to render a final created list of products
  };

  #nutsCheck = (productList) => {
    let tempArray = productList.filter((item) => {
      if (Boolean(!item.nuts) && this.filters.noNuts == true) {
        return item;
      } else if (this.filters.noNuts == false) {
        return item;
      }
    });
    return tempArray;
  };

  #veganCheck = (productList) => {
    let tempArray = productList.filter((item) => {
      if (item.vegeterian && this.filters.vegeterianOnly == true) {
        return item;
      } else if (this.filters.vegeterianOnly == false) {
        return item;
      }
    });
    return tempArray;
  };

  #spicyCheck = (productList) => {
    let tempArray = productList.filter((item) => {
      if (item.spiciness <= this.filters.maxSpiciness) {
        return item;
      }
    });
    return tempArray;
  };

  #categoryCheck = (productList) => {
    let tempArray = productList.filter((item) => {
      if (item.category == this.filters.category) {
        return item;
      } else if (this.filters.category == "") {
        return item;
      }
    });
    return tempArray;
  };
}
