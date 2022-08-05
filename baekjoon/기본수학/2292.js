const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();
let lastRoom = 1;
let answer = 0;
let i = 0;
if (number == 1) return console.log(1);
while (lastRoom < number) {
  lastRoom += 6 * i;
  answer++;
  i++;
}
console.log(answer);
