//------------------------------------------------------->
// Throttling Implementation
//------------------------------------------------------->

/* <button onclick="throttledFn1()"></button> */

const expensiveFn = (name) => {
    //expensive operation
    console.log("clicked", name)
}

//---------------------------------------------->
// Throttle with setTimeout first implemetations
//---------------------------------------------->

const throttle = (callbackFn, delay) => {
    let timer;
    return (...args) => {
        let context = this;
        if (timer === undefined) {
            callbackFn.apply(context, args);
            timer = setTimeout(() => {
                timer = undefined;
            }, delay);
        }
    }
}
let throttledFn1 = throttle(expensiveFn, 1000);

//---------------------------------------------->
// Throttle with setTimeout second implemetation
//---------------------------------------------->

const throttle1 = (callbackFn, delay) => {
    let flag = true;
    return (...args) => {
        let context = this;
        if (flag) {
            callbackFn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}
const throttledFn2 = throttle1(expensiveFn, 300);

//---------------------------------------------->
// Throttle without setTimeout
//---------------------------------------------->

const throttleWithoutSetTimeout = (callbackFn, delay) => {
    let shouldCall = true;
    let lastTime = Date.now();
    return (...args) => {
        let context = this;
        if (shouldCall) {
            callbackFn.apply(context, args);
            shouldCall = false;
        }
        let currentTime = Date.now();
        if (currentTime - lastTime >= delay) {
            shouldCall = true;
            lastTime = currentTime;
        }
    }
}
const throttledFn3 = throttleWithoutSetTimeout(expensiveFn, 10000);