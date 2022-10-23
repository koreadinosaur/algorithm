let input = require("fs").readFileSync("example.txt").toString().trim();
let [n, k] = input.split(" ").map(Number);

function Josephus(x, y) {
  let stack = [];
  let result = [];
  for (let i = 1; i <= x; i++) {
    stack.push(i);
  }
  let count = 0;
  while (stack.length !== result.length) {
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] !== -1) count++;
      if (count === y && stack[i] !== -1) {
        result.push(stack[i]);
        stack[i] = -1;
        count = 0;
      }
    }
  }
  return result;
}

console.log("<" + Josephus(n, k).join(", ") + ">");
