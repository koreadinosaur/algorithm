const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split(" ");
console.log((+input[0] + +input[1]) % input[2]);
console.log((+(input[0] % input[2]) + +(input[1] % input[2])) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
