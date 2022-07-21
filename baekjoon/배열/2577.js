const fs = require("fs");
const number = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map(Number);
const result = number[0] * number[1] * number[2];
const array = result.toString().split("");
const object = {};
for (let i = 0; i < 10; i++) {
  object[i] = 0;
}
array.map((x) => (object[x] += 1));
console.log(Object.values(object).join("\n"));
