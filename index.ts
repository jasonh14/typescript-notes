console.log("Hello Typescript");

// Implicit Types
let helloWorld = "Hello, World!";

// Explicit Types
let firstName: string = "John";
let age: number = 30;

//  Tuple
type stringAndNumber = [string, number];
let x: stringAndNumber = ["Hello", 5];

// Enums
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;
console.log(c);

// Interface
interface Data {
  bankAccount: string;
  address: string;
}

interface User {
  name: string;
  id: number;
  data: Data;
}

const user: User = {
  name: "jason",
  id: 4,
  data: {
    bankAccount: "949494",
    address: "jl blbl",
  },
};

// Composing types -> Union
type WindowStates = "open" | "close" | "minimized";
const windowState: WindowStates = "open";

const getLength = (param: string | string[]) => {
  return param.length;
};

console.log(getLength("test"));
console.log(getLength(["test", "test"]));
