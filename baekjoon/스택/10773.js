const input = require("fs").readFileSync("example.txt").toString().trim();

let result = [];
let array = input.split("\n").slice(1).map(Number);
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    result.pop();
  } else {
    result.push(array[i]);
  }
}
if (result.length === 0) return console.log(0);
console.log(result.reduce((acc, cur) => acc + cur));
