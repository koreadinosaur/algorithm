const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const array = num2.split(" ").map(Number);
let answer = 0;
for (let i = 0; i < num1; i++) {
  let n = array[i];
  let x = 2;
  while (n != 1) {
    if (n % x === 0) {
      n /= x;
    } else {
      x++;
    }
  }
  if (x === array[i]) {
    answer++;
  }
}
console.log(answer);
