const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().split("\n");
let answer = "";
for (let i = 0; i < number.length; i++) {
  const [x, y] = number[i].split(" ").map(Number);
  if (x + y !== 0) {
    answer += x + y + "\n";
  } else {
    break;
  }
}
console.log(answer);
