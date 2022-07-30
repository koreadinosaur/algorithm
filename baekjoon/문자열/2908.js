const fs = require("fs");
const [number1, number2] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
const reverseNum1 = parseInt(number1.split("").reverse().join(""));
const reverseNum2 = parseInt(number2.split("").reverse().join(""));
reverseNum1 > reverseNum2 ? console.log(reverseNum1) : console.log(reverseNum2);
