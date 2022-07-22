const fs = require("fs");
const array = fs.readFileSync("example.txt").toString().trim().split("\n");
const split = array.map((x) => x.split("X"));
const obj = {};
for (let i = 1; i < split.length; i++) {
  split[i].map(
    (x) => (obj[i] = (obj[i] || 0) + (x.length * (x.length + 1)) / 2)
  );
}
console.log(Object.values(obj).join("\n"));
