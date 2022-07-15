const fs = require("fs");
const [num1, num2] = fs.readFileSync("/dev/stdin").toString().split(" ");

let h = num1 * 1;
let m = num2 * 1;
if (m >= 45) {
  m = m - 45;
} else if (m < 45 && h > 0) {
  h = h - 1;
  m = m + 15;
} else if (m < 45 && h == 0) {
  h = 23;
  m = m + 15;
}
console.log(h, m);
