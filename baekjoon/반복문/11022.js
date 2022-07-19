const fs = require("fs");
const array = fs.readFileSync("/dev/stdin").toString().split("\n");
let answer = "";
for (let i = 1; i < parseInt(array[0]) + 1; i++) {
  const [num1, num2] = array[i].split(" ");
  const x = num1 * 1;
  const y = num2 * 1;
  answer += `Case #${i}: ${x} + ${y} = ${x + y}\n`;
}
console.log(answer);
