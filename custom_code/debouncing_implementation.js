/* <input type="text" onkeyup="debouncedFn()"></button> */

const expensiveFn = () => {
    //expensive operation
    console.log("clicked");
}

const debounce = (callbackFn, delay) => {
    let timer;
    return (...args) => {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            callbackFn.apply(context, args);
        }, delay)
    }
}
const debouncedFn = debounce(expensiveFn, 300);