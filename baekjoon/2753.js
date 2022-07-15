const fs = require("fs");
const number = fs.readFileSync("example.txt").toString();
const year = +number;
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? console.log("1")
  : console.log("0");
