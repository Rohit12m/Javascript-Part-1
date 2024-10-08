// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 455121631146564116n;

// Reference (Non primitivr)

// Array, Objects, Functions

const heros = ["Iron Man", "Super Man", "Thor", "Batman"];
let myObj = {
  name: " Rohit",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof id); //

