const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();
const a = number * 1;
const b = Math.ceil(a / 3);
let c = number;
let answer;
let i = 0;
while (i < b) {
  answer = i + (a - 3 * i) / 5;
  if (a % 5 == 0 || (a - 3 * i) % 5 === 0) break;
  i++;
}
console.log(i >= b ? (a % 3 == 0 ? a / 3 : "-1") : answer);
