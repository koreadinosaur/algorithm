const fs = require("fs");
const string = fs.readFileSync("example.txt").toString().trim().split("\n");
for (let i = 1; i < string.length; i++) {
  const repeat = string[i].split(" ")[0];
  let answer = "";
  const targetString = string[i].split(" ")[1];
  for (let j = 0; j < targetString.length; j++) {
    answer += targetString[j].repeat(repeat);
  }
  console.log(answer);
}
