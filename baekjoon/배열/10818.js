const fs = require("fs");
const [num1, num2] = fs.readFileSync("example.txt").toString().split("\n");
const array = num2.split(" ").map(Number);
console.log(Math.min.apply(null, array), Math.max.apply(null, array));
