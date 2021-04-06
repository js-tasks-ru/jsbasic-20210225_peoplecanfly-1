export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    //create a temporary object to push in cartItems
    const tempProduct = {};
    tempProduct.count = 1;
    tempProduct.product = product;

    // find element in array with the same product.name
    const cartItem = this.cartItems.find(
      (item) => item.product.name == tempProduct.product.name
    );

    // if there is a same element increase q-ty + 1
    // else add full tempProduct object to array.
    if (cartItem) {
      cartItem.count++;
      this.onProductUpdate(cartItem); //call function
    } else {
      this.cartItems.push(tempProduct);
      this.onProductUpdate(tempProduct);
    }
  }

  updateProductCount(productId, amount) {
    // find element in array with the same productId
    const cartItem = this.cartItems.find(
      (item) => item.product.id == productId
    );
    // if >= 1  + or - 1 element
    if (cartItem.count >= 1) {
      cartItem.count += amount;
      this.onProductUpdate(cartItem);
    }
    //  if last element delete object from array 
    if (cartItem.count <= 0) {
      const idOfElementToDelete = this.cartItems.indexOf(cartItem);
      this.cartItems.splice(idOfElementToDelete, 1);
    }
  }

  isEmpty() {
    if (this.cartItems.length > 0) {
      return true;
    }
    return false;
  }

  getTotalCount() {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.count;
    });
    return console.log(total);
  }

  getTotalPrice() {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.product.price * item.count;
    });
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
  }
}
