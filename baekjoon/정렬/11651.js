const input = require("fs").readFileSync("example.txt").toString().trim();
const arrayDividedByLine = input
  .split("\n")
  .slice(1)
  .map((x) => x.split(" ").map(Number));

const sortedArr = arrayDividedByLine.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
console.log(sortedArr.map((x) => x.join(" ")).join("\n"));
