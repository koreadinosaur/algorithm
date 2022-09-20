/* 팰린드롬 */
const strings = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = "";
function recursion(string, startIdx, endIdx, count = 0) {
  count++;
  if (string[startIdx] !== string[endIdx]) {
    return `0 ${count}`;
  } else if (startIdx >= endIdx) {
    return `1 ${count}`;
  }
  return recursion(string, startIdx + 1, endIdx - 1, count);
}
function isPalindrome(string) {
  return `${recursion(string, 0, string.length - 1)}\n`;
}
function resultRecur(string) {
  result += isPalindrome(string);
}
for (let i = 1; i < strings.length; i++) {
  resultRecur(strings[i]);
}
console.log(result);
