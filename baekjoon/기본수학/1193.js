const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();
let denominator = 1;
let numerator = 1;
let count = 0;
if (number == 1) return console.log("1/1");
while (number > count) {
  denominator++;
  count = (denominator * (denominator + 1)) / 2;
}
if (denominator % 2 === 0) {
  console.log(
    denominator -
      (count - number * 1) +
      "/" +
      (numerator + (count - number * 1))
  );
} else {
  console.log(
    numerator +
      (count - number * 1) +
      "/" +
      (denominator - (count - number * 1))
  );
}
