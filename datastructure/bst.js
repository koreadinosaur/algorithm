/* Binary Search Tree */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    /* 의사코드
    1. 루트가 없으면 해당 값이 루트가 된다.
    2. 그게 아니면 새로운 노드의 value가 root의 value보다
    큰지 작은지 판단해야 한다.
    3. 크다고하면 right에 값이 있는지 확인, 없으면 그 값이되고
    4. 있으면 다시 그 값과 새 노드의 value 비교.
    5. 2부터 반복. 반복은 while문
    6. 마지막엔 전체 트리 반환 */
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value === val) return undefined;
        if (currentNode.value > newNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            break;
          }
        }
      }
    }
    return this;
  }
  find(val) {
    if (this.root === null) return false;
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === val) return true;
      if (currentNode.value > val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
    /* 리팩토링 필요 */
  }
  BreadthFirstSearch() {
    /* 의사코드 
    1. 변수 queue 생성 : 큐(선입선출) 노드들을 큐에 저장(enqueue)
    2. visited 변수 생성(배열)
    3. queue에 Root 저장
    4. queue에 있는 value들을 dequeue해서 visited에 저장
    5. visited에 들어온 dequeued된 값의 left, right를 확인해서 존재하면 enqueue
    6. 마지막에 visited 리턴.
    7. 매우 어렵다. */
    const queue = new Queue();
    let visitedTreeNode = [];
    queue.enqueue(bst.root);
    while (queue.size > 0) {
      if (queue.first.value.left) {
        queue.enqueue(queue.first.value.left);
      }
      if (queue.first.value.right) {
        queue.enqueue(queue.first.value.right);
      }
      visitedTreeNode.push(queue.first.value.value);
      queue.dequeue();
    }
    return visitedTreeNode;
  }
  searchChildNodes(node) {
    if (node === null) return;
    console.log(node);
    let leftChildNode = node.left && this.searchChildNodes(node.left);
    let rightChildNode = node.right && this.searchChildNodes(node.right);
    return [leftChildNode, rightChildNode];
  }
  preOrderDFS() {
    /* 의사코드
    1. visited 변수 선언
    2. current 변수에 root 저장
    3. 헬퍼함수 생성(preOrder) - 노드의 값을 return할 변수에 저장하는 역할
    - 이 함수는 재귀적으로 호출한다. 노드의 left나 right가 있으면 같은 함수를
    호출한다.
    - 아니 변수에 저장한다는 역할이 뭐지?? push를 어떻게 한다는 거임.
    4.  */
    let visitedTreeNode = [];
    function pushChildToVisitedTreeNode(node) {
      visitedTreeNode.push(node.value);
      node.left && pushChildToVisitedTreeNode(node.left);
      node.right && pushChildToVisitedTreeNode(node.right);
    }
    pushChildToVisitedTreeNode(this.root);
    return visitedTreeNode;
    //[20, 10, 5, 15, 30, 25, 35]
  }
  postOrderDFS() {
    let visitedTreeNode = [];
    function pushChildToVisitedTreeNode(node) {
      node.left && pushChildToVisitedTreeNode(node.left);
      node.right && pushChildToVisitedTreeNode(node.right);
      visitedTreeNode.push(node.value);
    }
    pushChildToVisitedTreeNode(this.root);
    return visitedTreeNode;
    //[5, 15, 10, 25, 35, 30, 20]
  }
  inOrderDFS() {
    let visitedTreeNode = [];
    let currentNode = this.root;
    function pushChildToVisitedTreeNode(node) {
      if (node.left) {
        pushChildToVisitedTreeNode(node.left);
      }
      visitedTreeNode.push(node.value);
      if (node.right) {
        pushChildToVisitedTreeNode(node.right);
      }
    }
    pushChildToVisitedTreeNode(this.root);
    return visitedTreeNode;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /*
  로직 
  1.맨 뒤에 추가해서, 맨 앞에서 제거하는 방법
  2. 맨 앞에 추가해서, 맨 뒤에서 제거하는 방법 */
  enqueue(val) {
    let newNode = new queueNode(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    let dequeuedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    dequeuedNode.next = null;
    this.size--;
    return dequeuedNode;
  }
}

class queueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(15);
bst.insert(5);
bst.insert(25);
bst.insert(35);
const dfsSearch = bst.inOrderDFS();
console.log(dfsSearch);
