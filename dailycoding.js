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
/* 27번 시간복잡도 log n 으로 거듭제곱 구하기.
function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let number;
  function calculate(base, exponent) {
    if (exponent === 1) {
      return base;
    }
    let result;
    if (exponent % 2 === 1) {
      if (number) {
        number = (number * base) % 94906249;
      } else {
        number = base;
      }
    }

    base = (base * base) % 94906249;
    exponent = parseInt(exponent / 2);

    return (result = calculate(base, exponent));
  }

  let result = calculate(base, exponent);
  return (result * number) % 94906249;
}
 */
/* 
코플릿 28번
let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let queue = [];
  let result = [];
  function helperBfs(node) {
    node && result.push(node.value);
    node && node.children.forEach((item) => queue.push(item));
    console.log(queue);
    if (queue.length === 0) return;
    helperBfs(queue.shift());
  }
  helperBfs(node);
  return result;
};
*/
/* 
29번
const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  if (Math.max(...rotated) > target) {
    return -1;
  }
  let left = 0;
  let right = rotated.length - 1;
  let middle = Math.floor((right - left) / 2) + left;
  while (left < right) {
    if (rotated[middle] === target) {
      return middle;
    } else if (rotated[middle] > target && rotated[left] > target) {
      left = middle - 1;
    } else if (rotated[middle] < target && rotated[left] > target) {
      left = middle - 1;
    } else if (rotated[middle] > target && rotated[left] < target) {
      right = middle + 1;
    } else if (rotated[middle] < target && rotated[left] < target) {
      right = middle + 1;
    }

    middle = Math.ceil((right - left) / 2) + left;
    if (middle === right) {
      return -1;
    }
  }
  return -1;
};
let output = rotatedArraySearch([1, 2, 3], 5);
console.log(output); // --> 5 */
/* 
코플릿 30번
const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str === "") return true;
  const strArr = str.split("");
  function removeFromArray(array, idx1) {
    array.splice(idx1, 2);
  }

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "(" && strArr[i + 1] === ")") {
      removeFromArray(strArr, i);
      i = i - 2;
    } else if (strArr[i] === "{" && strArr[i + 1] === "}") {
      removeFromArray(strArr, i);
      i = i - 2;
    } else if (strArr[i] === "[" && strArr[i + 1] === "]") {
      removeFromArray(strArr, i);
      i = i - 2;
    }
  }
  if (strArr.length === 0) return true;
  return false;
};
let output = balancedBrackets("[(]{)}");
console.log(output); */
/* const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  let i = 0;
  let j = 0;
  let result;
  while (i + j !== k) {
    if (i >= arr1.length) {
      j++;
      break;
    } else if (j >= arr2.length) {
      i++;
      break;
    }
    if (arr1[i] > arr2[j]) {
      j++;
      if (i + j + 2 === k) {
        result = arr2[j];
      }
    } else {
      i++;
      if (i + j + 2 === k) {
        result = arr1[i];
      }
    }
  }
  return result;
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8 */
/* function paveBox(boxes) {
  // TODO: 여기에 코드를 작성합니다.
  의사코드 : queue = []
  : boxes 반복문 순회하면서 queue에있는 요소들보다
  숫자가 작을 때만 queue에 push
  숫자가 크다? queue에 들어있는 사람들은 따로 저장하고 queue 비워준다.
  people = [] 

  let queue = [];
  let people = [];
  while (boxes.length > 0) {
    if (queue.length === 0) {
      queue.push(boxes.shift());
    } else if (queue[0] >= boxes[0]) {
      queue.push(boxes.shift());
      if (boxes.length === 0) {
        people.push(queue.length);
      }
    } else {
      people.push(queue.length);
      queue = [];
      queue.push(boxes.shift());
    }
  }
    for (let i = 0; i < boxes.length; i++) {
    if (queue.length === 0) {
      queue.push(boxes[i]);
    } else if (queue[0] >= boxes[i]) {
      queue.push(boxes[i]);
      if (i === boxes.length - 1) {
        people.push(queue.length);
      }
    } else {
      people.push(queue.length);
      queue = [];
      queue.push(boxes[i]);
    }
  }

  return Math.max(...people);
}
const result4 = paveBox([95, 90, 99, 99, 80, 99]);
console.log(result4); */

/* 인접 리스트 advanced */
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    // TODO: 정점을 추가합니다.
    // 넘겨받은 인자(정점)은 키가 되며, 빈 배열을 값으로 할당합니다.
    // 이미 존재하는 정점이라면, 덮어 씌워지지 않아야 합니다.
    if (!this.vertices[vertex]) this.vertices[vertex] = [];
  }

  contains(vertex) {
    // 인자로 넘겨받은 정점의 존재여부를 반환합니다.
    return !!this.vertices[vertex];
  }

  addEdge(fromVertex, toVertex) {
    // TODO: 간선을 추가합니다.
    // - fromVertex의 인접 리스트에 toVertex를 추가하고
    // - toVertex의 인접 리스트에 fromVertex를 추가합니다.
    // 넘겨받은 2개의 정점 모두 존재하는 정점이어야 합니다.

    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }

    if (!this.hasEdge(fromVertex, toVertex)) {
      this.vertices[fromVertex].push(toVertex);
    }

    if (!this.hasEdge(toVertex, fromVertex)) {
      this.vertices[toVertex].push(fromVertex);
    }
  }

  hasEdge(fromVertex, toVertex) {
    // 만약 정점(fromVertex)이 존재하지 않는다면
    if (!this.contains(fromVertex)) {
      // false를 반환합니다
      return false;
    }
    // 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
    return !!this.vertices[fromVertex].includes(toVertex);
  }

  removeEdge(fromVertex, toVertex) {
    // TODO: 간선을 삭제합니다.
    // 인자로 넘겨받은 두 정점이 모두 존재한다면
    // - fromVertex의 인접 리스트에 있는 toVertex를 삭제하고
    // - toVertex의 인접 리스트에 있는 fromVertex를 삭제합니다.

    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }

    if (this.hasEdge(fromVertex, toVertex)) {
      const index = this.vertices[fromVertex].indexOf(toVertex);
      this.vertices[fromVertex].splice(index, 1);
    }
    // TODO:  두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
    if (this.hasEdge(toVertex, fromVertex)) {
      const index = this.vertices[toVertex].indexOf(fromVertex);
      this.vertices[toVertex].splice(index, 1);
    }
  }

  removeVertex(vertex) {
    // TODO: 정점을 삭제합니다.
    // 인자로 넘겨받은 정점(A)이 존재한다면
    // - 이 정점(A)을 삭제함은 물론,
    // - 다른 모든 정점들의 리스트를 순회하며 넘겨받은 정점(A)과 이어져 있는 간선을 제거합니다
    if (this.contains(vertex)) {
      for (let i = 0; i < this.vertices[vertex].length; i++) {
        this.removeEdge(vertex, this.vertices[vertex][i]);
        i--;
      }
    }
    delete this.vertices[vertex];
  }
}

const adjList = new GraphWithAdjacencyList();
adjList.addVertex("Seoul");
adjList.addVertex("Daejeon");
adjList.addVertex("Busan");

adjList.contains("Seoul"); // true
adjList.contains("Jeonju"); // false
