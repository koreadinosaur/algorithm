const [n, ...commands] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

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

function dealWithCommands(loopCondition, commandArray) {
  let queue = new Queue();
  let result = [];
  loopCondition = +loopCondition;
  for (let i = 0; i < loopCondition; i++) {
    if (commandArray[i].split(" ")[0] === "push") {
      queue.enqueue(commandArray[i].split(" ")[1]);
    }
    switch (commandArray[i]) {
      case "pop":
        queue.size > 0 ? result.push(queue.dequeue().value) : result.push(-1);
        break;
      case "size":
        result.push(queue.size);
        break;
      case "empty":
        queue.size > 0 ? result.push(0) : result.push(1);
        break;
      case "front":
        queue.size > 0 ? result.push(queue.first.value) : result.push(-1);
        break;
      case "back":
        queue.size > 0 ? result.push(queue.last.value) : result.push(-1);
        break;
      default:
        break;
    }
  }
  return result;
}
const result = dealWithCommands(n, commands);
console.log(result.join("\n"));
