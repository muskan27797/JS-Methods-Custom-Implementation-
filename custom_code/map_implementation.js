let arr = [1, 2, 3, 4];
// ------------------------------------------->
//      Map Implementation
// ------------------------------------------->

let arrAfterMap = arr.map(function (item, index) {
    return item * 2;
})
console.log("arr after map Implementation - ", arrAfterMap);

// ---------------------------->
//   Custom Map Implementation
// ---------------------------->
Array.prototype.customMap = function (callback) {
    let outputArr = [];
    for (let i = 0; i < this.length; i++) {
        outputArr[i] = callback(this[i], i, this);
    }
    return outputArr;
}

let arrAfterCustomMap = arr.customMap(function (item, index, arr) {
    return item * 3;
});
console.log("arr after custom map Implementation - ", arrAfterCustomMap);