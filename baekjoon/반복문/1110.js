const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().split("");
let i = 0;
let plusString = number[0] + number[1];
let plusNum = +plusString;
do {
  if (plusNum < 10) {
    plusNum = "0" + plusNum;
  }
  plusNum =
    (plusNum % 10) * 10 + (((plusNum % 10) + parseInt(plusNum / 10)) % 10);
  i++;
} while (+plusString !== plusNum);
console.log(i);
