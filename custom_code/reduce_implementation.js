let arr = [1, 2, 3, 4];
// ------------------------------------------->
//      Reduce Implementation 
// ------------------------------------------->
let arrAfterReduce = arr.reduce((total, item) => {
    if (item % 2 === 0) {
        total += item;
    }
    return total;
}, 9);

console.log("value after reduce Implementation - ", arrAfterReduce);
//-------------------------------->
//    Custom Reduce Implementation
//-------------------------------->

const lineItems = [
    { description: "Eggs (Dozen)", quantity: 1, price: 3, total: 3 },
    { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
    { description: "Butter", quantity: 2, price: 6, total: 12 },
];

Array.prototype.customReduce = function (callbackfn, acc) {
    for (let i = 0; i < this.length; i++) {
        if (acc === undefined) {
            acc = this[i];
            continue;
        }
        acc = callbackfn(acc, this[i], i, this);
    }
    return acc;
};

let arrAfterCustomReduce = lineItems.customReduce((acc, item, index, arr) => {
    acc[item.description] = item.quantity + item.price;
    return acc;
}, {});
console.log("value after custom reduce Implementation - ", arrAfterCustomReduce);