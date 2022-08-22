const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();

function recursive(num) {
  if (num <= 1) return 1;
  return num * recursive(num - 1);
}
console.log(recursive(number));
