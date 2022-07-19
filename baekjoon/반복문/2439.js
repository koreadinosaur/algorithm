const fs = require("fs");
const number = fs.readFileSync("example.txt").toString();
const n = +number;
let answer = "";
for (let i = 1; i < n + 1; i++) {
  answer += " ".repeat(n - i) + "*".repeat(i) + "\n";
}
console.log(answer);
