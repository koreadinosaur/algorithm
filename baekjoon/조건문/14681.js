const fs = require("fs");
const [num1, num2] = fs.readFileSync("example.txt").toString().split("\n");
const x = num1 * 1;
const y = num2 * 1;
if (x > 0 && y > 0) {
  console.log("1");
} else if (x > 0 && y < 0) {
  console.log("4");
} else if (x < 0 && y > 0) {
  console.log("2");
} else if (x < 0 && y < 0) {
  console.log("3");
}
