const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim().split(" ");
const num1 = number[0] * 1;
const num2 = number[1] * 1;
const num3 = number[2] * 1;

console.log(Math.ceil((num3 - num2) / (num1 - num2)));
