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
  
  var myString = "In your cart, you have "

    for(var i = 0; i < cart.length; i++){
      for(var list in cart[i]){
        myString+=`${list} at $${cart[i][list]}`
          if(i!==cart.length-1){
            myString += ", "
          } else{
            myString += "."
          }
       }

    }

  if(cart.length === 0){
    return ("Your shopping cart is empty.")
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
