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
      let parentNode = this.root;
      while (true) {
        if (parentNode.value > newNode.value) {
          if (parentNode.left) {
            parentNode = parentNode.left;
            continue;
          } else {
            parentNode.left = newNode;
            break;
          }
        } else {
          if (parentNode.right) {
            parentNode = parentNode.right;
            continue;
          } else {
            parentNode.right = newNode;
            break;
          }
        }
      }
    }
    return this;
  }
}

const bst = new BinarySearchTree();
