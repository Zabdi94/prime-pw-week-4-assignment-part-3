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
        return true;
    }
}

// console log tests
console.log ('adding oranges', addItem ('oranges'));
console.log ('adding grapes', addItem('grapes'));
console.log ('adding apples', addItem ('apples'));

//list item function

function listItems() {
for (item of cart) {
console.log (item);
}
}
console.log (`my cart has ${cart}`) // how to see if the item got listed correctly

function empty () {
    basket = [];
}

function removeItem (item) {
for (let i=0 ; i< cart.length; i ++) {
    if (cart.indexOf (item)=== i) {
cart.splice (i,0:)


    }
}








}



