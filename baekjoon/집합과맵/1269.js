const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const setA = input[1].split(" ");
const setB = input[2].split(" ");
const set = new Set(setA.concat(setB));
const intersection = setA.length + setB.length - set.size;

console.log(setA.length + setB.length - 2 * intersection);
