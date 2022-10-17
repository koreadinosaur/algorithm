const input = require("fs").readFileSync("example.txt").toString().trim();
const maxNumber = input.split("\n").shift();
const numbers = input.split("\n").slice(1).map(Number);
let stack = [];
let j = 1;
let result = [];
for (let i = 1; i <= +maxNumber; i++) {
  const shifted = numbers.shift();
  while (j <= shifted) {
    stack.push(j);
    result.push("+");
    j++;
  }
  const poped = stack.pop();
  if (shifted !== poped) {
    return console.log("NO");
  }
  result.push("-");
}

console.log(result.join("\n"));
