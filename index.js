const fs = require("fs");
const [a, b] = fs.readFileSync("example.txt").toString().split(" ");
function compare(num1, num2) {
  switch (num1) {
    case num1 < num2:
      console.log("<");
      break;
    case num1 > num2:
      console.log(">");
      break;
    case num1 === num2:
      console.log("==");
  }
}
compare(1, 2);
