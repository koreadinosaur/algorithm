const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().split("\n");
const example = new File("example.txt");
console.log(example);
let answer = "";
for (let i = 0; i < number.length; i++) {
  const [x, y] = number[i].split(" ").map(Number);
  answer += x + y + "\n";
}
console.log(answer);
