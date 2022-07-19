const fs = require("fs");
const number = fs.readFileSync("/dev/stdin").toString();
const n = Number(number);
for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${i * n}`);
}
