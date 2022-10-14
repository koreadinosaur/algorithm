const input = require("fs").readFileSync("example.txt").toString().trim();

let result = [];
for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j <= input.length - i; j++) {
    let str = input.slice(j, j + i);

    result.push(str);
  }
}
console.log(new Set(result).size);
