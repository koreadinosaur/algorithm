const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().split("\n");
console.log(number);
let i = 0;
while (i < number.length) {
  const [x, y] = number[i].split(" ").map(Number);
  console.log(x + y);
  i++;
}
