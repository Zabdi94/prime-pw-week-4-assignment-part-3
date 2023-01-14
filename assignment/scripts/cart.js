console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created basket and added item function
let basket = [];
console.log(basket.length);
const maxItems = 5;

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }

}

console.log('basket')

function addItem(item) {
    if (isFull() === true) {
        console.log('your basket is full!');
        return false;

    } else {
        basket.push(item) // Adds a new item into the array
        return true;
    }
}

// console log tests
console.log('adding oranges', addItem('oranges'));
console.log('adding grapes', addItem('grapes'));
console.log('adding apples', addItem('apples'));

//list item function

function listItems() {
    for (item of basket) {
        console.log(item);
    }
}
console.log(`my basket has ${basket}`) // how to see if the item got listed correctly

function empty() {
    basket = [];
}

function itemsListed(item) {
    for (let i = 0; i < basket.length; i++) {
        if (basket.indexOf(item) === i) {
            basket.splice(i, 0);
            return item;
        } else {
            return null;
        }


    }
}
//Removing Items
console.log(itemsListed('oranges'));
console.log(itemsListed('grapes'));

console.log('this will remove all the items in the cart', empty()); // removes items from cart
console.log(`basket is now ${basket}`); //now you check if the items were emptied













