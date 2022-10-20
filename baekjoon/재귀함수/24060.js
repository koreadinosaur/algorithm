let [line1, line2] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let [n, k] = line1.split(" ").map(Number);

let targetArray = line2.split(" ").map(Number);
let count = 0;
let storedKth;
function merge(array1, array2) {
  let result = [];

  let i = 0;
  let j = 0;
  while (i !== array1.length || j !== array2.length) {
    if (array1[i] > array2[j] || array1[i] === undefined) {
      result.push(array2[j]);
      j++;
      count++;
      if (count === k) storedKth = array2[j - 1];
    } else if (array1[i] < array2[j] || array2[j] === undefined) {
      result.push(array1[i]);
      i++;
      count++;
      if (count === k) storedKth = array1[i - 1];
    }
  }

  return result;
}
function mergeSort(array) {
  if (array.length === 1) return array;
  let indexOfCenter = Math.ceil(array.length / 2);
  let left = mergeSort(array.slice(0, indexOfCenter));
  let right = mergeSort(array.slice(indexOfCenter));
  return merge(left, right);
}

mergeSort(targetArray);
if (count < k) return console.log(-1);
console.log(storedKth);
