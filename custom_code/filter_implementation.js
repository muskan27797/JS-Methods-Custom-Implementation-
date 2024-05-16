let arr = [1, 2, 3, 4];
// ------------------------------------------->
//      Filter Implementation 
// ------------------------------------------->

let arrAfterFilter = arr.filter(function (item, index, arr) {
    if (item % 2 == 0) {
        return true;
    }
});
console.log("arr after filter Implementation - ", arrAfterFilter);

//-------------------------------->
//    Custom Filter Implementation
//-------------------------------->
Array.prototype.customFilter = function (callback) {
    let outputArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            outputArr.push(arr[i]);
        }
    }
    return outputArr;
};

let arrAfterCustomFilter = arr.customFilter(function (item) {
    if (item % 3 === 0) {
        return true;
    }
});
console.log("arr after custom filter Implementation - ", arrAfterCustomFilter);