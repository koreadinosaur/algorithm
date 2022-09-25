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
}

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(15);
console.log(bst);
console.log(bst.find(16));
