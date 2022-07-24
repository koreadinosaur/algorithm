const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();
let count = 0;

for (let i = 1; i <= number; i++) {
  if (i < 100) {
    count++;
  } else if (
    i < 1000 &&
    parseInt((i % 1000) / 100) - parseInt((i % 100) / 10) ===
      parseInt((i % 100) / 10) - (i % 10)
  ) {
    count++;
  }
}
console.log(count);
