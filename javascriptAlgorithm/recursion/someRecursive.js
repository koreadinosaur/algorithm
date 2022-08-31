/* 재귀 심화 17 : 배열, callback 함수를 전달받고, 배열 내 요소를 콜백
함수에 전달했을 때 true를 반환하는 요소가 있으면 true를 반환하는 재귀함수 */
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[array.length - 1])) return true;
  return someRecursive(array.slice(0, array.length - 1), callback);
}

const test = someRecursive([4, 6, 8], isOdd);
console.log(test);
