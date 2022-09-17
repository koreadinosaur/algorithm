class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singleLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    /* 의사코드
    1. 전달된 value로 새로운 노드를 생성한다.
    2. 헤드가 없다면 리스트가 비어있으므로 전달된 값을
    head와 tail에 할당한다.
    3. 리스트가 비어있지 않다면, 마지막 노드의 next를 전달된 값으로
    할당한다. length도 추가.
    4.   */
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    /* 의사코드
    1. list에 노드가 없으면 undefined반환
    2. head부터 tail까지 리스트를 검색한다.(반복문)
    3. 마지막에 다다르면, 현재 tail앞에 있는 노드의 next 노드를
    null로 바꿔준다.(연결고리를 끊는 것)
    4. tail앞에 있었던 노드를 tail로 설정한다.
    5. length를 감소시켜준다.
    6. 제거된 노드 반환한다.(왜하지?) */
    if (this.head === null) return undefined;
    let current = this.head;
    let pre;

    while (current) {
      if (current.next) {
        pre = current;
      }
      current = current.next;
    }
    /* while문은 다음과 같이 줄일 수 있음
    while(current.next){
      pre = current;
      current = current.next
    } */
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (this.head === null) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.tail = null;
    }
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unshift(val) {
    /* 의사코드
    1. value를 전달받아서 새로운 노드 생성
    2. head가 있는지 없는지 판별 후 없으면 head와 tail지정
    3. 있으면 새로운 노드의 next property로 현재 head를 지정 */
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    /* index를 인자로 받아서 해당 위치의 노드를 출력 */
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let targetNode = this.head;
    while (count < index) {
      targetNode = targetNode.next;
      count++;
    }
    return targetNode;
  }
}
/* 아니~ 왜 똑같이 따라쳤는데도 안돼????? 환장하겠네 아.. this.head.next가 아니라
this.tail.next였다... */
let list = new singleLinked();

console.log(list);
list.unshift("Hi");
list.push("I");
list.push("am");
list.push("thirty two");
list.push("years old");
console.log(list.get(3));
