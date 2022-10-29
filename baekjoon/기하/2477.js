const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const theNumberOfFruits = Number(input[0]);
let hexagonSide = [];
for (let i = 1; i < input.length; i++) {
  hexagonSide.push(input[i].split(" ").map(Number));
}
let smallSquare = [];
let largeSquare = [];

for (let i = 0; i < hexagonSide.length; i++) {
  if (hexagonSide[i][0] === hexagonSide[(i + 2) % 6][0]) {
    smallSquare.push(hexagonSide[(i + 2) % 6][1], hexagonSide[(i + 1) % 6][1]);
    let counterSide1 =
      hexagonSide[i][0] % 2 === 0
        ? hexagonSide[i][0] - 1
        : hexagonSide[i][0] + 1;
    let counterSide2 =
      hexagonSide[(i + 1) % 6][0] % 2 === 0
        ? hexagonSide[(i + 1) % 6][0] - 1
        : hexagonSide[(i + 1) % 6][0] + 1;

    largeSquare = hexagonSide.filter(
      (item) => item[0] === counterSide1 || item[0] === counterSide2
    );
    break;
  }
}

let result =
  largeSquare[0][1] * largeSquare[1][1] - smallSquare[0] * smallSquare[1];
console.log(String(result * theNumberOfFruits));
