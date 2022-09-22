class Stack {
  /* 이중연결리스트의 head, tail과 같은 역할을 함.
  의사코드
  1. 앞에서 추가, 제거할거임.
  2. push와 pop의 시간복잡도는 O(1)이어야 한다.
    */
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    /* 의사코드
    1. 스택에 노드가 하나도 없으면 새로운 노드가 first, last가 된다.
    2. 노드가 있으면 현재 first를 다른 변수에 저장하고
    3. 새로운 노드를 first로 저장한다. */
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }

    return ++this.size;
  }
  pop() {
    /* 의사코드
    1. 스택이 비어있으면 null 반환 
    2. size가 1이면 first와 last 둘 다 제거
    3. 그 이상이면 first 프로퍼티를 현재 first의 next프로퍼티로 설정
    4. 제거된 노드 반환*/
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.size--;
    return temp;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
