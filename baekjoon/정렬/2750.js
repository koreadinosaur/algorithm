/* 오름차순 정렬 */
const notSorted = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = notSorted.splice(1).map(Number);
function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

for (let i = 0; i < arr.length; i++) {
  for (let j = arr.length - 1; j > i; j--) {
    if (arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
    }
  }
}

console.log(arr.join("\n"));
