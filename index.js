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

function getDirections(matrix, from, to) {
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
console.log(result2);
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
console.log(result4); */
