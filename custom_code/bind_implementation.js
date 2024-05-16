// ------------------------------------------->
//      Bind Implementation
// ------------------------------------------->

let obj = {
    name: "Shubham",
    age: 24
}

let genericFunction = function (city, state) {
    return this.name + " is " + this.age + " from " + city + ", " + state;
}

let bindImplementation = genericFunction.bind(obj, "Mirzapur");
console.log("bind Implementation - ", bindImplementation("UP"));

//-------------------------------->
//    Custom Bind Implementation
//-------------------------------->

let obj1 = {
    name: "Shubham",
    age: 24
}

let genericFunction1 = function (city, state) {
    console.log("custom bind Implementation - ", this.name + " is " + this.age + " from " + city + ", " + state);
}

Function.prototype.customBind = function (...args) {
    let func = this;
    let params = args.slice(1);
    return function (...args1) {
        func.apply(args[0], [...params, ...args1]);
    };
};

let customBindImplementation = genericFunction1.customBind(obj1, "Mumbai");
customBindImplementation("Maharashtra");