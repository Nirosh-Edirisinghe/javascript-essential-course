let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

let buyCost = price > 50 ? 0 : 5 ;
console.log(`price = ${price} Buycost = ${buyCost}`);
