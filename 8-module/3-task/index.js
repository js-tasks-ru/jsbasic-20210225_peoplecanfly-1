export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    //create a temporary object to push in cartItems
    const productObject = { product, count: 1 };

    // find element in array with the same product.name
    const cartItem = this.cartItems.find(
      (item) => item.product.id == productObject.product.id
    );

    // if there is a same element increase q-ty + 1
    
    if (cartItem) {
      cartItem.count++;
      this.onProductUpdate(cartItem); //call function to add item 
    } else {
      this.cartItems.push(productObject);
      this.onProductUpdate(productObject);
    }
  }

  updateProductCount(productId, amount) {
    // find element in array with the same productId
    const cartItem = this.cartItems.find(
      (item) => item.product.id == productId
    );

    if (cartItem.count >= 1) {
      cartItem.count += amount;
      this.onProductUpdate(cartItem);
    }
    //  if q-ty of object is 0 - delete obj from array
    if (cartItem.count <= 0) {
      const idOfElementToDelete = this.cartItems.indexOf(cartItem);
      this.cartItems.splice(idOfElementToDelete, 1);
    }
  }

  isEmpty() {
    return this.cartItems.length == 0 ? true : false;
  }

  getTotalCount() {
    return this.cartItems.reduce((previousValue, currentItem) => {
       return previousValue + currentItem.count;
    }, 0); 
  }

  getTotalPrice() {
    return this.cartItems.reduce((previousValue, currentItem)=>{
      return previousValue + currentItem.product.price * currentItem.count;
    },0);
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
  }
}
