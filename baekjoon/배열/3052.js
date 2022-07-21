const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim().split("\n");
const object = {};
number.map((x) => (object[x % 42] = (object[x % 42] || 0) + 1));
console.log(Object.keys(object).length);
