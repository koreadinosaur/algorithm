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
console.log(output);

-------------
15번
function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  if (num2 === 0) return "Error: cannot divide by zero";
  let share = 0;
  while (num1 >= num2) {
    num1 = num1 - num2;
    share++;
  }
  return num1;
}
let output = modulo(25, 4);
console.log(output); // --> 1
---------------------
17번
Math.sqrt 쓰지 않고 제곱근 구하기

  let rootNum = 1;

  while (num !== rootNum ** 2) {
    if (Number((rootNum ** 2).toFixed(2)) === num) break;
    if (rootNum > num) break;
    console.log(rootNum);
    rootNum = (rootNum + num / rootNum) / 2;
  }
  return +rootNum.toFixed(2);
  
-------------------------------
18번
function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str === "") return 0;
  str = str.split(" ").join("");
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(Number(str[i]))) {
      sum += Number(str[i]);
      str = str.slice(0, i) + str.slice(i + 1);
      i--;
    }
  }
  return Math.round(sum / str.length);
}

output = numberSearch("Hello6 9World 2, Nic8e D7ay!");
console.log(output); // --> 2
*/
