/* 12번 좌표찾기 */
function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let matrixCoordinate = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf("B") !== -1) {
      matrixCoordinate.push(i);
      matrixCoordinate.push(arr[i].indexOf("B"));
    }
  }
  return matrixCoordinate;
}
output = findBugInApples([
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
]);
console.log(output); //[1, 1]

/* 14번 superIncreasing 
function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let isLargerThanSum = true;
  for (let i = 1; i < arr.length; i++) {
    let sum = 0;
    for (let j = i - 1; j >= 0; j--) {
      sum += arr[j];
    }
    if (sum >= arr[i]) {
      isLargerThanSum = false;
      break;
    }
  }
  return isLargerThanSum;
}
output = superIncreasing([1, 3, 5, 9]);
console.log(output); */
