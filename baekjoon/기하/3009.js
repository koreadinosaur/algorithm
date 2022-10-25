const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let coordinates = input.map((item) => item.split(" ").map(Number));
let obj = {};
coordinates.forEach((item) => {
  obj[`${item[0]}X`] = (obj[`${item[0]}X`] || 0) + 1;
  obj[`${item[1]}Y`] = (obj[`${item[1]}Y`] || 0) + 1;
});
let result = [];
for (let key in obj) {
  if (obj[key] === 1) {
    if (key.slice(-1) === "X") {
      result[0] = key.slice(0, -1);
    } else {
      result[1] = key.slice(0, -1);
    }
  }
}
console.log(result.join(" "));
