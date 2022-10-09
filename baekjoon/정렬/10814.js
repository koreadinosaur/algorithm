const input = require("fs").readFileSync("example.txt").toString().trim();
const array = input
  .split("\n")
  .slice(1)
  .map((item) => item.split(" "));
array.sort((a, b) => a[0] * 1 - b[0] * 1);
console.log(array.map((item) => item.join(" ")).join("\n"));
