const input = require("fs").readFileSync("example.txt").toString().trim();
const [n, m] = input.split("\n")[0].split(" ").map(Number);
const strings = input.split("\n").slice(1, n + 1);
const targetStrings = input.split("\n").slice(n + 1);
let count = 0;
let setOfstrings = {};
strings.forEach((item) => (setOfstrings[item] = 1));
targetStrings.forEach((item) => {
  if (setOfstrings[item]) {
    count++;
  }
});
console.log(count);
