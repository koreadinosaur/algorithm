const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ");
function compare(num1, num2) {
  if (num1 > num2) {
    console.log(">");
  } else if (num1 < num2) {
    console.log("<");
  } else {
    console.log("==");
  }
}
compare(+a, +b);
