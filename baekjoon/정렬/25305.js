let [line1, line2] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const Winners = line1.split(" ").map(Number)[1];
const sorted = line2
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(sorted[Winners - 1]);
