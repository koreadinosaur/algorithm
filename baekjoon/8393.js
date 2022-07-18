const fs = require("fs");
const number = fs.readFileSync("example.txt").toString();
let i = 0;
let sum = 0;
for (i = 0; i < parseInt(number) + 1; i++) {
  sum += i;
}
console.log(sum);
