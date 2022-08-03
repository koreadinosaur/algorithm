const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim();
let obj = {};
for (let i = 65; i < 91; i++) {
  if (String.fromCharCode(i) === "S") {
    obj[String.fromCharCode(i)] = 7;
  } else if (String.fromCharCode(i) === "V") {
    obj[String.fromCharCode(i)] = 8;
  } else if (String.fromCharCode(i) === "Y" || String.fromCharCode(i) === "Z") {
    obj[String.fromCharCode(i)] = 9;
  } else {
    obj[String.fromCharCode(i)] = Math.ceil((i - 61) / 3);
  }
}

let answer = 0;
for (let i = 0; i < number.length; i++) {
  answer += obj[number[i]] + 1;
}
console.log(answer);
