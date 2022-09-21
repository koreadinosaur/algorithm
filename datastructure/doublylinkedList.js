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
  set(index, val) {
    let targetNode = this.get(index);
    if (targetNode) {
      targetNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    /* index가 length보다 크거나, 음수면 false반환(get으로 얻은 변수로
        조건문 작성하면 될 듯) */
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    }
    let targetNode = this.get(index - 1);
    let newNode = new Node(val);
    let nextNode = targetNode.next;
    targetNode.next = newNode;
    newNode.next = nextNode;
    newNode.prev = targetNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
}

const DblLinkedList = new DoublyLinkedList();
DblLinkedList.push(1);
DblLinkedList.push(2);
DblLinkedList.push(3);
DblLinkedList.push(4);
console.log(DblLinkedList.insert(4, "하이"));

console.log(DblLinkedList);
