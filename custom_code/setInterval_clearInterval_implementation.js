// ------------------------------------------->
// Custom setInterval & clearInterval Implementation
// ------------------------------------------->
let window = this;
function customImplementation(window) {
    const interval = [];
    window.setInterval = (callbackFn, delay) => {

        let id;
        function x() {
            id = setTimeout(() => {
                callbackFn();
                x();
            }, delay);

            interval.push(id);
        }
        x();
        return id;
    }

    window.clearInterval = () => {
        for (let i = 0; i < interval.length; i++) {
            clearTimeout(interval);
        }
    }
}

customImplementation(window);
console.log("custom setInterval and clearInterval implementation : ")
const pid = setInterval(() => {
    console.log("Hello world");
}, 2000);
//   console.log("PID", pid);

setTimeout(() => {
    clearInterval(pid)
}, 10000)