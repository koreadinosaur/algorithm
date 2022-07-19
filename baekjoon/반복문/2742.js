const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().split("\n");
let answer = "";
let n = parseInt(number[0]);
while (n > 0) {
  answer += n + "\n";
  n -= 1;
}
console.log(answer);
