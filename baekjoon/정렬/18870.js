const input = require("fs").readFileSync("example.txt").toString().trim();
const array = input.split("\n")[1].split(" ").map(Number);
const sortedArr = array.slice(0).sort((a, b) => a - b);
const obj = {};
let value = 0;
let i = 0;
while (i < sortedArr.length) {
  if (!obj[sortedArr[i]] && obj[sortedArr[i]] !== 0) {
    obj[sortedArr[i]] = value;
    value++;
  }
  i++;
}
let result = [];
array.forEach((item, index) => {
  result[index] = obj[item];
});
console.log(result.join(" "));
