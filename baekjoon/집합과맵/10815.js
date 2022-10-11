const input = require("fs").readFileSync("example.txt").toString().trim();
const [n, cards, m, numbers] = input.split("\n");
const cardsArr = cards
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const numbersArr = numbers.split(" ").map(Number);
const result = numbersArr.map((item) => binarySearch(cardsArr, item));
function binarySearch(array, target) {
  let leftEndOfArray = 0;
  let rightEndOfArray = array.length - 1;
  let middle = Math.floor(
    (rightEndOfArray - leftEndOfArray) / 2 + leftEndOfArray
  );
  while (leftEndOfArray <= rightEndOfArray) {
    if (array[middle] === target) {
      return 1;
    } else if (array[middle] > target) {
      rightEndOfArray = middle - 1;
    } else if (array[middle] < target) {
      leftEndOfArray = middle + 1;
    }

    middle = Math.ceil((rightEndOfArray - leftEndOfArray) / 2 + leftEndOfArray);
  }
  return 0;
}
console.log(result.join(" "));
