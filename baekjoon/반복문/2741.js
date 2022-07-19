const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().split("\n");
let answer = "";
for (let i = 1; i < parseInt(number[0]) + 1; i++) {
  answer += i + "\n";
}
console.log(answer);
