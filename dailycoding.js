/* 12번 좌표찾기 */
/* function findBugInApples(arr) {
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
console.log(output); //[1, 1] */

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

-----------------------------

19번
function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let asciiCode = [];
  for (let i = 0; i < str.length; i++) {
    asciiCode.push(str[i].charCodeAt(0));
    console.log(str[i].charCodeAt(0));
  }

  const result = asciiCode.map((item) => {
    if (item === 32) {
      return " ";
    }
    if (item - secret < 97) {
      let newCode = 123 - (97 - (item - secret));
      return String.fromCharCode(newCode);
    }
    return String.fromCharCode(item - secret);
  });
  return result.join("");
}
output = decryptCaesarCipher("nzop delepd dfaazced jzf", 11);
console.log(output); // --> world

20번
function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let j = i;
    while (char === str[j]) {
      j++;
    }
    if (j - i >= 3) {
      result += `${j - i}${str[i]}`;
      i = j - 1;
    } else {
      result += `${str[i]}`;
    }
  }
  return result;
}
let output = compressString("wwwggoppopppp");
console.log(output); // --> 3wggoppo4p
----------------------------------------
section3
21번
const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let maxNum = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        maxNum =
          arr[i] * arr[j] * arr[k] > maxNum ? arr[i] * arr[j] * arr[k] : maxNum;
        console.log(arr[i], arr[j], arr[k], arr[i] * arr[j] * arr[k]);
      }
    }
  }
  return maxNum;
};
output = largestProductOfThree([-5, -4, -3, -2, -1]);
console.log(output);

22번 피보나치 시간복잡도 O(n)
  let devidedNFibo = subfibosacci(Math.ceil(n / 2));
  let nMinusFibo = subfibosacci(Math.ceil(n / 2) - 1);

  function subfibosacci(x) {
    if (x <= 0) return 0;
    if (x <= 2) return 1;
    return subfibosacci(x - 1) + subfibosacci(x - 2);
  }
  function assistantFibo(x) {
    if (x === Math.ceil(n / 2)) return devidedNFibo;
    if (x === Math.ceil(n / 2) - 1) return nMinusFibo;
    return assistantFibo(x - 1) + assistantFibo(x - 2);
  }
  return assistantFibo(n);
*/

/* 23번 버블 정렬 
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  for (let i = 0; i < arr.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
      }
    }
    if (!isSwap) return arr;
  }
  return arr;
};

let output = bubbleSort([8, 5, 2, 1, 3, 6]);
console.log(output); // --> [1, 2, 3] */

/* 24번 부분집합 확인하기
const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = base.concat(sample);
  let obj = {};
  let isSubset = true;
  for (let el of newArr) {
    obj[el] = (obj[el] || 0) + 1;
  }
  for (let el of sample) {
    if (obj[el] !== 2) {
      isSubset = false;
    }
  }
  return isSubset;
};
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true */
/* 25 Tiling
let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  if (n < 2) return 1;
  if (memoization[n]) {
    return memoization[n];
  } else {
    memoization[n] = tiling(n - 1) + tiling(n - 2);
  }
  return memoization[n];
};
*/
/* 
26 DFS
let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let visitedNode = [];
  function pushNodeToArray(node) {
    visitedNode.push(node.value);
    node.children[0] && pushNodeToArray(node.children[0]);
    node.children[1] && pushNodeToArray(node.children[1]);
  }
  pushNodeToArray(node);
  return visitedNode;
};
*/
