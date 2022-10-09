const input = require("fs").readFileSync("example.txt").toString().trim();
const array = input.split("\n").slice(1);
const nonDuplicatedArr = new Set(array);
let newArr = [...nonDuplicatedArr];
newArr.sort((a, b) => {
  if (a.length === b.length && a < b) {
    return -1;
  }
  return a.length - b.length;
});
console.log(newArr.join("\n"));
