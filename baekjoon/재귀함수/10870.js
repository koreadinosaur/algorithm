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
