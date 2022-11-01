const [line1, line2] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const measures = line2
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;
if (measures.length > 1) {
  result = measures[0] * measures[measures.length - 1];
} else {
  result = measures[0] ** 2;
}
console.log(result);
