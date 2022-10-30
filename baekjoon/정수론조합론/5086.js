const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const numbers = input.map((item) => item.split(" ").map(Number));
let result = [];
for (let i = 0; i < numbers.length - 1; i++) {
  let devidedAbyB = numbers[i][0] / numbers[i][1];
  let devidedBbyA = numbers[i][1] / numbers[i][0];
  if (Number.isInteger(devidedAbyB)) {
    result.push("multiple");
  } else if (Number.isInteger(devidedBbyA)) {
    result.push("factor");
  } else {
    result.push("neither");
  }
}
console.log(result.join("\n"));
