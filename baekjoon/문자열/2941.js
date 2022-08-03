const fs = require("fs");
const string = fs.readFileSync("example.txt").toString().trim();
const array = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;
let str = string;

for (let i = 0; i < array.length; i++) {
  if (str.indexOf(array[i]) >= 0) {
    str = str.replaceAll(array[i], "1");
  }
}

count = str.length;
console.log(count);
