const [line1, line2] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const m = line1.split(" ").map(Number)[1];
const cards = line2.split(" ").map(Number);

let maxSum = 0;
for (let i = 0; i < cards.length - 2; i++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      maxSum =
        Math.abs(maxSum - m) > Math.abs(sum - m) && sum <= m ? sum : maxSum;
    }
  }
}
console.log(maxSum);
