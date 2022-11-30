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
/* class GraphWithAdjacencyList {
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
adjList.contains("Jeonju"); // false */

/* const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let leftIndex = 0;
  let rightIndex = arr1.length;
  let result = 0;
  let count = 0;
  function binarySearch(arr, startIndex, endIndex) {
    while (startIndex < endIndex) {
      let center = Math.floor((endIndex - startIndex) / 2);
      if (arr[center] > k) {
        endIndex = center - 1;
      } else if (arr[center] < k) {
        startIndex = center + 1;
      } else {
        result += center;
      }
      if (count >= arr.length) break;
      count++;
    }
    if (result === 0) result += startIndex;
  }
  binarySearch(arr1, leftIndex, rightIndex);
  rightIndex = arr2.length;
  count = 0;
  binarySearch(arr2, leftIndex, rightIndex);
  return result;
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8 */
/* function queuePrinter(bufferSize, capacities, documents) {
  // TODO: 여기에 코드를 작성합니다.
  let queue = new Array(bufferSize).fill(0);
  let sum = documents[0];
  queue[bufferSize - 1] = documents.shift();
  let count = 1;
  while (sum > 0) {
    sum = sum - queue.shift();
    if (sum + documents[0] <= capacities) {
      let shifted = documents.shift();
      queue.push(shifted);
      sum += shifted;
    } else {
      queue.push(0);
    }
    count++;
  }
  return count;
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output); // 8 */
/* class Tree {
  constructor(value) {
    // constructor로 만든 객체는 트리의 Node가 됩니다.
    this.value = value;
    this.children = [];
  }
  // 트리의 삽입 메서드를 만듭니다.
  insertNode(value) {
    // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
    // TODO: 트리에 붙게 될 childNode를 만들고, children에 넣어야 합니다.

    const childNode = new Tree(value);
    this.children.push(childNode);
  }
  contains(value) {
    // TODO: 값이 포함되어 있다면 true를 반환하세요.
    if (this.value === value) {
      return true;
    }
    // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.

    for (let i = 0; i < this.children.length; i++) {
    }

    // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
    return false;
  }
}
const rootNode = new Tree(null);
for (let i = 0; i <= 4; i++) {
  if (rootNode.children[i]) {
    rootNode.children[i].insertNode(i);
  } else {
    rootNode.insertNode(i);
  }
}

const find1 = rootNode.contains(5); // false
const find2 = rootNode.contains(1); // tru2
console.log(find1, find2); */

// graph
/* class GraphWithAdjacencyMatrix {
  constructor() {
    this.matrix = [];
  }

  addVertex() {
    //버텍스를 추가합니다.
    const currentLength = this.matrix.length;
    for (let i = 0; i < currentLength; i++) {
      this.matrix[i].push(0);
    }
    this.matrix.push(new Array(currentLength + 1).fill(0));
  }
  contains(vertex) {
    //TODO: 버텍스가 있는지 확인합니다.
    if (vertex < this.matrix.length) {
      return true;
    }
    return false;
  }

  addEdge(from, to) {
    const currentLength = this.matrix.length;
    if (from === undefined || to === undefined) {
      console.log("2개의 인자가 있어야 합니다.");
      return;
    }
    //TODO: 간선을 추가할 수 없는 상황에서는 추가하지 말아야 합니다.
    if (
      from + 1 > currentLength ||
      to + 1 > currentLength ||
      from < 0 ||
      to < 0
    ) {
      console.log("범위가 매트릭스 밖에 있습니다.");
      return;
    }
    //TODO: 간선을 추가해야 합니다.
    this.matrix[from][to] = 1;
  }
}
const adjMatrix = new GraphWithAdjacencyMatrix();
adjMatrix.addVertex();
adjMatrix.addVertex();
adjMatrix.addVertex();
adjMatrix.addEdge(0, 1);
adjMatrix.addEdge(0, 2);
adjMatrix.addEdge(1, 2);
console.log(adjMatrix); */

// 10번
/* function createMatrix(edges) {
  // TODO: 여기에 코드를 작성합니다.
  const coordinatesArray = [];
  edges.forEach((item) => {
    coordinatesArray.push(item[0], item[1]);
  });
  const max = Math.max(...coordinatesArray);
  const array = [];

  for (let i = 0; i < max + 1; i++) {
    array.push(new Array(max + 1).fill(0));
  }
  console.log(array);
  for (let i = 0; i < edges.length; i++) {
    let x = edges[i][0];
    let y = edges[i][1];
    if (edges[i][2] === "directed") {
      array[x][y] = 1;
    } else {
      array[x][y] = 1;
      array[y][x] = 1;
    }
  }
  return array;
}

const output2 = createMatrix([[0, 6, "directed"]]);

console.log(output2); */

/* function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.
  let visited = new Array(matrix.length).fill(false);
  function recursion(matrix, from, to) {
    if (visited[from]) {
      return false;
    } else {
      visited[from] = true;
    }
    if (matrix[from][to] === 1) return true;
    for (let i = 0; i < matrix[from].length; i++) {
      let x = matrix[from][i];
      if (x === 1) {
        if (recursion(matrix, i, to)) {
          return true;
        }
      }
    }
    return false;
  }
  return recursion(matrix, from, to);
}
const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const result2 = getDirections(matrix, 0, 2);
console.log(result2); */
// const result3 = getDirections(matrix, 0, 3);
// console.log(result3);

/* 
12번
function connectedVertices(edges) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  let queue = [];
  while (edges.length > 0) {
    queue.push(...edges.shift());
    while (queue.length > 0) {
      let flattedEdges = edges.flat();
      let indexOfLinked = flattedEdges.indexOf(queue.shift());
      if (indexOfLinked !== -1) {
        let spliced = edges.splice(Math.floor(indexOfLinked / 2), 1);
        queue.push(spliced[0][0], spliced[0][1]);
      }
    }

    count++;
  }
  return count;
}
const result4 = connectedVertices([
  [0, 1],
  [5, 6],
  [6, 4],
  [2, 3],
  [4, 1],
  [3, 4],
]);
console.log(result4); 
function barcode(len) {
  // TODO: 여기에 코드를 작성하세요.
  let minimumBarcode = "1";

  /* 
  수도코드 
  전체적인 로직 : validation 검사 후 통과하는 숫자를
  barcode에 더해준다.

  1. validation 검사
  vaildation 검사는 1개씩 나눠서 처음부터 끝까지
  그 다음 2개씩 나눠서 처음부터 끝까지
  3개씩나눠서 처음부터 끝까지
  나눠지는 개수가 string의 길이의 절반이 될때까지 반복
  
  2. barcode 더하기
    제일 작은 수를 반환해야하므로
    validation을 통과한 숫자 중에 1부터 차례대로
    barcode에 더해준다.

    만약 validation이 모두 통과 안된다면,
    바로 직전에 더 해진 숫자가 1이나 2이므로(더 작아서 더해진 것이므로)
    바로 3을 더해준다.
    
  */

/*   function validation(string) {
    for (let i = 1; i <= Math.floor(string.length / 2); i++) {
      for (let j = 0; j < string.length - i; j++) {
        let left = string.slice(j, j + i);
        let right = string.slice(j + i, j + i * 2);
        console.log(left, right);
        if (left === right) {
          return false;
        }
        if (left.length !== right.length) break;
      }
    }
    return true;
  }
  while (minimumBarcode.length !== len) {
    if (validation(minimumBarcode + 1)) {
      minimumBarcode += 1;
    } else if (validation(minimumBarcode + 2)) {
      minimumBarcode += 2;
    } else if (validation(minimumBarcode + 3)) {
      minimumBarcode += 3;
    } else {
      minimumBarcode = minimumBarcode.slice(0, -1);
      minimumBarcode += 3;
    }
  }

  return minimumBarcode;
} */
// let output = barcode(3);
// console.log(output); // "121"

/*
코플릿 32번
const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let indexOfTwo = 0;
  let indexOfThree = 0;
  let indexOfFive = 0;
  let uglyNumbers = [1];
  for (let i = 0; i < n; i++) {
    let multiplyTwo = uglyNumbers[indexOfTwo] * 2;
    let multiplyThree = uglyNumbers[indexOfThree] * 3;
    let multiplyFive = uglyNumbers[indexOfFive] * 5;
    let nextNumber = Math.min(multiplyTwo, multiplyThree, multiplyFive);
    if (multiplyTwo === nextNumber) indexOfTwo++;
    if (multiplyThree === nextNumber) indexOfThree++;
    if (multiplyFive === nextNumber) indexOfFive++;
    uglyNumbers.push(nextNumber);
  }

  return uglyNumbers[n - 1];
};
let result = uglyNumbers(15);
console.log(result); */

/* function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  let lessThanTarget = 0;
  let order = 0;
  let factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };
  for (let i = 0; i < K.length; i++) {
    for (let j = 0; j < i; j++) {
      if (K[j] < K[i]) {
        lessThanTarget++;
      }
    }
    order += factorial(K.length - i - 1) * (K[i] - 1 - lessThanTarget);
    lessThanTarget = 0;
  }
  return order;
}

let output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6 */
const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const strArray = str.split("").sort();
  const set = new Set(strArray);
  const arrayOfUnique = Array.from(set);

  const result = [];
  function dfs(idx, subset) {
    if (idx === arrayOfUnique.length) {
      result.push(subset);
      return;
    }

    dfs(idx + 1, subset);
    dfs(idx + 1, subset + arrayOfUnique[idx]);
  }
  dfs(0, "");
  return result.sort();
};
let output1 = powerSet("jjump");
console.log(output1);
