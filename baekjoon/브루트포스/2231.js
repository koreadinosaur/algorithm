const input = require("fs").readFileSync("example.txt").toString().trim();
const decompositionSum = input * 1;
let minConstructor = 0;
for (let i = 0; i < decompositionSum; i++) {
  let sum = i;
  let numberToString = i.toString();
  for (let j = 0; j < numberToString.length; j++) {
    sum += numberToString[j] * 1;
  }
  if (sum === decompositionSum) {
    minConstructor = i;
    break;
  }
}
console.log(minConstructor);
