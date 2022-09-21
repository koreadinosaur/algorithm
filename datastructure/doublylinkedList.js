class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      poppedNode.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let shiftedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedHead.next;
      this.head.prev = null;
      shiftedHead.next = null;
    }
    this.length--;
    return shiftedHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    /* 의사코드
    1. index가 length보다 같거나 클 경우, 음수일 경우 null 반환
    2. length /2 보다 작은지 큰지 확인 */
    if (index >= this.length || index < 0) return null;
    let targetNode = this.head;
    if (index <= this.length / 2) {
      for (let i = 0; i < index; i++) {
        targetNode = targetNode.next;
      }
    } else {
      targetNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        targetNode = targetNode.prev;
      }
    }
    return targetNode;
  }
}

const DblLinkedList = new DoublyLinkedList();
for (let i = 0; i < 10; i++) {
  DblLinkedList.push(i);
}
console.log("get : ", DblLinkedList.get(8));
console.log(DblLinkedList);
