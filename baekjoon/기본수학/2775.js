const fs = require("fs");
const number = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
for (let i = 1; i <= number[0]; i++) {
  const k = number[2 * i - 1];
  const n = number[2 * i];
  const array = Array(k + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  for (let a = 1; a < n + 1; a++) {
    array[0][a] = a;
  }
  for (let b = 1; b < k + 1; b++) {
    for (let c = 1; c < n + 1; c++) {
      array[b][c] = array[b - 1][c] + array[b][c - 1];
    }
  }
  console.log(array[k][n]);
}
