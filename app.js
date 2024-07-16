// ES5 variables
var aa = 200;
var bb = 300;

// ES5 function
function print() {}

// ES6 variables
const a = 100;
const b = 200;
const c = a + b;

// ES6 function
const printf = () => {};

console.log("Answer: ", c);

// module code uudig jijig jijig heseg bolgoj salgana => import || export - ES5

const add = require("./myMath");
const { sub } = require("./myMath");

// console.log("add:", add(10, 20));
console.log("sub:", sub(40, 20));

const person = {
  name: "Naraa", //property
  age: 20,

  hevle: function () {}, // method
};

console.log("Name: ", person.name);
console.log("Age: ", person.age);

const { name, age } = person;

console.log("Name: ", name);
console.log("Age: ", age);

const arr = ["Saraa", 30];

// const ner = arr[0];
// const nas = arr[1];

let ranks = [1, 5, 7, 8, 10, 7];

const [ner, nas] = arr;

const check = (ranks) => ranks === 7; // ternary

// array method => map
const newArr = ranks;
const nA = [];

for (let item of ranks) {
  console.log("value: ", item);
  nA.push(item * 2);
}

console.log("Ranks", ranks);
console.log("New array", nA);

const newArray = ranks.map((val) => val * 2);
console.log("New array 2 ", newArray);

const filteredArray = ranks.filter((val) => val > 7);
console.log("Filtered array ", filteredArray);

const reduceArray = ranks.reduce((pV, cV) => pV + cV, 0);
console.log("Reduce array ", reduceArray);
