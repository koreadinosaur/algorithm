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
    let newNode = new Node(val);
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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
console.log(newQueue);
