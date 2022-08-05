const fs = require("fs");
const [fixedCost, variableCost, price] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

if (+price <= +variableCost) return console.log(-1);
let break_Even_Point =
  1 +
  Math.floor(parseInt(fixedCost) / (parseInt(price) - parseInt(variableCost)));
console.log(break_Even_Point);
