const fs = require("fs");
const number = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= number[0]; i++) {
  let n = number[i];
  let array = Array.from({ length: number[i] }, (_, x) => x + 1);
  let newArr = array.filter((x) => {
    if (x === 1) return false;
    for (let j = 2; j <= Math.sqrt(x); j++) {
      if (x % j === 0) {
        return false;
      }
    }
    return true;
  });
  let primeNumber = newArr.filter((x) => {
    if (number[i] - x === 1) return false;
    for (let j = 2; j <= Math.sqrt(number[i] - x); j++) {
      if ((number[i] - x) % j === 0) {
        return false;
      }
    }
    return true;
  });
  const a = primeNumber[Math.ceil(primeNumber.length / 2) - 1];
  console.log(a, number[i] - a);
}
