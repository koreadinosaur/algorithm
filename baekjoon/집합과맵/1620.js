const input = require("fs").readFileSync("example.txt").toString().trim();
const [n, m] = input.split("\n")[0].split(" ").map(Number);
const pocketmons = input.split("\n").slice(1, n + 1);
const questions = input
  .split("\n")
  .slice(n + 1)
  .map((item) => {
    return isNaN(Number(item)) ? item : Number(item);
  });
let map = new Map();
let pocketmonMap = {};
let poketmonArray = [];
pocketmons.forEach((item, index) => {
  pocketmonMap[item] = index + 1;
  poketmonArray.push(item);
});
const result = questions.map((item) => {
  if (Number.isNaN(item * 1)) return pocketmonMap[item];
  return poketmonArray[item - 1];
});
console.log(result.join("\n"));
