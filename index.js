console.log("Hello Typescript");
// Implicit Types
var helloWorld = "Hello, World!";
// Explicit Types
var firstName = "John";
var age = 30;
var x = ["Hello", 5];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var user = {
    name: "jason",
    id: 4,
    data: {
        bankAccount: "949494",
        address: "jl blbl"
    }
};
var windowState = "open";
var getLength = function (param) {
    return param.length;
};
console.log(getLength("test"));
console.log(getLength(["test", "test"]));
