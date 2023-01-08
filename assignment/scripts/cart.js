console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created cart and added item function
let  cart = [];
const maxItems = 5;

function isFull() {
if (cart.length < maxItems) {
    return false; } else {
        return true;
    }

}

console.log ('cart')

function addItem(item) {
    if (isFull() ===true ) {
console.log('your cart is full!');
return false;

    } else {
        cart.push(item) // Adds a new item into the array
    }






}
