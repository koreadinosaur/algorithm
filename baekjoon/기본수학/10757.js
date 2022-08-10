const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

console.log((BigInt(num1) + BigInt(num2)).toString());
