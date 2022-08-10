const fs = require("fs");
const num = fs.readFileSync("example.txt").toString().trim();
let answer = "";
let n = num * 1;
let devider = 2;
if (num == 1) return;
while (n != 1) {
  if (n % devider === 0) {
    n /= devider;
    answer += devider + "\n";
  } else {
    devider++;
  }
}
console.log(answer);
