const input = require("fs").readFileSync("example.txt").toString().trim();
const numberOfNotHeard = input.split("\n")[0].split(" ")[0];
const notHeard = input.split("\n").slice(1, +numberOfNotHeard + 1);
const notSeen = input.split("\n").slice(+numberOfNotHeard + 1);
const obj = {};
notHeard.forEach((item) => (obj[item] = 1));
notSeen.forEach((item) => {
  if (obj[item]) obj[item]++;
});
let result = [];

for (let key in obj) {
  if (obj[key] > 1) {
    result.push(key);
  }
}
result.sort((a, b) => {
  if (a > b) return 1;
  return -1;
});
result.unshift(Object.values(obj).filter((item) => item > 1).length);
console.log(result.join("\n"));
