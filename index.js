const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const array = Array.from({ length: num2 - num1 + 1 }, (_, i) => num1 + i);
const answer = array.filter((x) => {
  if (x === 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
});

console.log(answer.join("\n"));
