const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();

function recursive(num) {
  if (num <= 1) return 1;
  return num * recursive(num - 1);
}
console.log(recursive(number));
const fs = require("fs");
const num = fs.readFileSync("example.txt").toString().trim();

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(num * 1));
