const a = require("fs").readFileSync("example.txt").toString().trim();
const num = a * 1;
let answer = "2";
if (num === 1) return false;
for (let i = 3; i <= num; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    answer += "-" + i;
  }
}
return console.log(answer);
