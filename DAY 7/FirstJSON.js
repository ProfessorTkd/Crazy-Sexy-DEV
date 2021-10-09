// npm install minimist
// npm init
// node FirstJSON.js 

let minimist = require("minimist");
let args = minimist(process.argv);

// JSON = Javascript Object Notation
// JSON means saving data in the same format as of javascript objects

let s1 = {
    name: "Sumeet",
    age: 34
}; // s1 is an object. name and age are properties / data members

console.log(s1.name);
console.log(s1.age);

let agesKaArr = [20, 19, 19];
console.log(agesKaArr[0]);
console.log(agesKaArr[1]);
console.log(agesKaArr[2]);

let namesKaArray = ["TAPISH", "ADITI", "CHARU"];
console.log(namesKaArray[0]);
console.log(namesKaArray[1]);
console.log(namesKaArray[2]);

let arrOfObjects = [
    {
        name: "TAPISH",
        age: 20
    }, 
    {
        name: "ADITI",
        age: 19
    },
    {
        name: "CHARU",
        age: 19
    }
];

console.log(arrOfObjects[0].name);
console.log(arrOfObjects[0].age);

console.log(arrOfObjects[1].name);
console.log(arrOfObjects[1].age);

console.log(arrOfObjects[2].name);
console.log(arrOfObjects[2].age);