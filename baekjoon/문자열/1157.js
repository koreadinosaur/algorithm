const fs = require("fs");
const string = fs.readFileSync("example.txt").toString().trim();
let obj = {};
if (string.length === 1) return console.log(string.toUpperCase());
for (let i = 0; i < string.length; i++) {
  obj[string[i].toUpperCase()] =
    (parseInt(obj[string[i].toUpperCase()]) || 0) + 1;
}
const newobj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
if (newobj[0][1] === newobj[1][1]) {
  console.log("?");
} else {
  console.log(newobj[0][0].toUpperCase());
}
