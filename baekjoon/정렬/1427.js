const input = require("fs").readFileSync("example.txt").toString().trim();
const array = input
  .split("")
  .map(Number)
  .sort((a, b) => b - a);

console.log(array.join(""));
