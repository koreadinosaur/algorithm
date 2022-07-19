const fs = require("fs");
const [line1, line2] = fs.readFileSync("example.txt").toString().split("\n");
const [N, X] = line1.split(" ").map(Number);
const array = line2
  .split(" ")
  .map(Number)
  .filter((x) => x < X);
console.log(array.join(" "));
