const fs = require("fs");
const number = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map(Number);
console.log(Math.max.apply(null, number));
console.log(number.indexOf(Math.max.apply(null, number)) + 1);
