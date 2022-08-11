const fs = require("fs");
const number = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let n = "";
for (let i = 0; i < number.length; i++) {
  if (number[i] === 0) break;
  const array = Array.from(
    { length: number[i] * 2 - number[i] },
    (_, x) => number[i] + x + 1
  );
  const answer = array.filter((x) => {
    if (x === 1) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        return false;
      }
    }

    return true;
  });
  n += answer.length + "\n";
}

console.log(n);
