const input = require("fs").readFileSync("example.txt").toString().trim();
let newArray = input.split("\n").slice(0, -1);
let obj = { "[": "]", "(": ")" };

function isBracket(string, object) {
  let stack = [];
  for (let j = 0; j < string.length; j++) {
    if (string[j] === "(" || string[j] === "[") {
      stack.unshift(string[j]);
    } else if (string[j] === ")" || string[j] === "]") {
      if (object[stack.shift()] !== string[j]) {
        return console.log("no");
      }
    }
  }
  if (stack.length !== 0) return console.log("no");
  return console.log("yes");
}

for (let i = 0; i < newArray.length; i++) {
  isBracket(newArray[i], obj);
}
