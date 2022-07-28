const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let answer = 0;
for (let i = 0; i < num1; i++) {
  answer += parseInt(num2[i]);
}
console.log(answer);
