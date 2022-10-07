const input = require("fs").readFileSync("example.txt").toString().trim();
const arrayDividedByLine = input
  .split("\n")
  .slice(1)
  .map((x) => x.split(" ").map(Number));
/* 의사코드
  1. 배열의 각 요소를 배열로 만들고[x,y] 의 형태다.
  2. 배열의 두 번째 요소부터 첫번째요소와 x를 비교하여 정렬.
  3. 오름차순으로 정렬하되 x값이 같으면 y를 기준으로 오름차순으로 정렬한다. */

const sortedArr = arrayDividedByLine.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});
console.log(sortedArr.map((x) => x.join(" ")).join("\n"));
