// ------------------------------------------->
//    currying Implementation
// ------------------------------------------->

const join = (a, b, c) => {
    return `${a}+${b}+${c}`;
};

const curry = (callbackFn) => {
    return (...args) => {
        let arr = [...args];
        if (arr.length >= callbackFn.length) {
            return callbackFn(...arr);
        }
        const innerFn = (...innerArgs) => {
            arr = [...arr, ...innerArgs];
            if (arr.length >= callbackFn.length) {
                return callbackFn(...arr);
            } else {
                return innerFn;
            }
        };
        return innerFn;
    };
};

const curriedJoin = curry(join);
console.log("custom currying implementation : ")
console.log(curriedJoin(1)(2, 3)); //1_2_3
console.log(curriedJoin(1, 2)(3)); //1_2_3
console.log(curriedJoin(1)(2)()()(3)); //1_2_3
console.log(curriedJoin(1, 2, 3)); //1_2_3
console.log(curriedJoin(1)(2)(3, 4, 5, 6)); //1_2_3