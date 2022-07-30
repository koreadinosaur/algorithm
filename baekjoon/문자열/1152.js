const fs = require("fs");
const string = fs.readFileSync("example.txt").toString().trim().split(" ");
if (string[0] === "") return console.log(0);
console.log(string.length);
