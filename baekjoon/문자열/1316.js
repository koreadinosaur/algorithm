const fs = require("fs");
const example = fs.readFileSync("example.txt").toString().trim().split("\n");
let answer = example.length - 1;
let compare = "";
for (let i = 1; i < example.length; i++) {
  compare = example[i][0];
  for (let j = 1; j < example[i].length; j++) {
    if (
      compare.includes(example[i][j]) &&
      example[i][j] !== example[i][j - 1]
    ) {
      answer--;
      break;
    }
    compare += example[i][j];
  }
}

console.log(answer);
