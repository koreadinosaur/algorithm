const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().split("\n");
let answer = "";
for (let i = 1; i < parseInt(number[0]) + 1; i++) {
  const [x, y] = number[i].split(" ");
  answer += parseInt(x) + parseInt(y) + "\n";
}
console.log(answer);
