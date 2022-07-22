const fs = require("fs");
const [num1, num2] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const array = num2.split(" ").map(Number);
const maxNum = Math.max.apply(null, array);
const newArr = array.map((x) => {
  return (x / maxNum) * 100;
});
console.log(newArr.reduce((acc, cur) => acc + cur) / newArr.length);
