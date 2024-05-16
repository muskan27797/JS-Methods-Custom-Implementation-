// ------------------------------------------->
//    Custom memoize Implementation
// ------------------------------------------->

function factorial(num) {
    if (num === 1 || num === 0) {
        return 1;
    }

    return num * factorial(num - 1);
}

function customMemoize(callback) {
    let cache = {};
    return (num) => {
        if (cache[num]) {
            return "Cached"
        }
        cache[num] = callback(num);
        return "Calculated"
    }
}
let memoized = customMemoize(factorial);
console.log("custom memoize implementation - ", memoized(6), memoized(6), memoized(6));// calculated cached cached