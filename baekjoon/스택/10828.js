const input = require("fs").readFileSync("example.txt").toString().trim();
let stack = [];
let commandArray = input.split("\n").slice(1);

let result = [];
for (let i = 0; i < commandArray.length; i++) {
  if (commandArray[i].split(" ")[0] === "push") {
    stack.unshift(commandArray[i].split(" ")[1]);
  }
  switch (commandArray[i]) {
    case "pop":
      stack.length > 0 ? result.push(stack.shift()) : result.push(-1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      stack.length > 0 ? result.push(0) : result.push(1);
      break;
    case "top":
      stack.length > 0 ? result.push(stack[0]) : result.push(-1);
    default:
      break;
  }
}

console.log(result.join("\n"));
