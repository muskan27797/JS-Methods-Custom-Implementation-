// ------------------------------------------->
//      forEach Implementation - Does not creates a new array changes the old array for that you will need to send array too compulsory
// ------------------------------------------->

let arrForEach = [1, 2, 3, 4, 5];
arrForEach.forEach((item, index, arr) => {
    arr[index] = item * 100;
});
console.log("arr after forEach Implementation - ", arrForEach);

//-------------------------------->
//    Custom forEach Implementation
//-------------------------------->

let arrForCustomForEach = [1, 2, 3, 4, 5];
Array.prototype.forEachCustom = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
arrForCustomForEach.forEachCustom((item, index, arr) => {
    arr[index] = item * 1000;
});
console.log("arr after custom forEach Implementation - ", arrForCustomForEach);