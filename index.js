var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
//write your code here
var price = Math.floor(Math.random() * 100) + 1;
var obj = {};
obj.itemName = item;
obj.itemPrice = price;
cart.push(obj);
return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
