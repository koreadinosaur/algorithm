const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();
let lastRoom = 1;
let answer = 0;
for (let i = 0; i < number; i++) {
  lastRoom += 6 * i;
  answer++;
  if (lastRoom >= number) break;
}
console.log(answer);
