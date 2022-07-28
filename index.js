const fs = require("fs");
const string = fs.readFileSync("example.txt").toString().trim();
const obj = {};

for (let j = 0; j < string.length; j++) {
  obj[string[j]] = (obj[string[j]] || 0) + 1;
}
console.log(Object.entries(obj).sort((a, b) => b[1] - a[1]));
