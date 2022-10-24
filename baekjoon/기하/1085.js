const input = require("fs").readFileSync("example.txt").toString().trim();
const coordinates = input.split(" ").map(Number);
let result;
let xDistance = Math.min(coordinates[2] - coordinates[0], coordinates[0]);
let yDistance = Math.min(coordinates[3] - coordinates[1], coordinates[1]);
if (xDistance > yDistance) {
  result = yDistance;
} else {
  result = xDistance;
}
console.log(result);
