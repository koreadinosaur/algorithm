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
}

const DblLinkedList = new DoublyLinkedList();
DblLinkedList.push(1);
DblLinkedList.push(2);
DblLinkedList.push(3);
console.log(DblLinkedList.pop());
console.log(DblLinkedList);
