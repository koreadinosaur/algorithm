const fs = require("fs");
const asc = fs.readFileSync("/dev/stdin").toString().trim();
console.log(asc.charCodeAt());
