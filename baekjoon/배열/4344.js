const fs = require("fs");
const array = fs.readFileSync("example.txt").toString().trim().split("\n");
let answer = "";
for (let i = 1; i < array.length; i++) {
  const newArr = [];
  const scoreArr = array[i].split(" ").map(Number);
  for (let j = 1; j < scoreArr.length; j++) {
    newArr.push(scoreArr[j]);
  }

  const average = newArr.reduce((acc, cur) => acc + cur) / newArr.length;
  const filteredArr = newArr.filter((x) => x > average);

  answer +=
    ((filteredArr.length / newArr.length) * 100).toFixed(3) + "%" + "\n";
}
console.log(answer);
