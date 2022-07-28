const fs = require("fs");
const string = fs.readFileSync("example.txt").toString().trim();
const obj = {};

for (let i = 97; i < 123; i++) {
  obj[String.fromCharCode(i)] = -1;
}
for (let j = 0; j < string.length; j++) {
  obj[string[j]] = string.indexOf(string[j]);
}
console.log(Object.values(obj).join(" "));
