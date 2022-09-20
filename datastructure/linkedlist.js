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
  set(index, value) {
    /* 해당 index의 value를 업데이트
    1. get 함수를 이용해서 해당 index에 위치한 노드 반환
    2. */
    let currentNode = this.get(index);
    /*이건 내가 쓴 코드..
     if (!currentNode) return false;
    currentNode.val = value;
    return true; 
    */
    if (currentNode) {
      currentNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    /* 1. index가 0보다 작거나, length보다 크면 false반환
    2. index가 length와 같으면 push메서드 호출.
    3. index가 0이면 unshift 호출
    4. 새로운 Node를 생성하고, index -1에 위치한 노드가 새로운 Node를
    next로 가리키게끔 한다.
    5. length는 + 1, return 값은 true or false
    6. push()나 unshift()를 사용했을 때 true or false를 반환하도록 해야함.*/
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    /* 이 조건문을 return !!this.unshift(newNode) 이렇게 바꿔줄 수도 있음. */
    if (index === 0) {
      this.unshift(newNode);
      return true;
    } else if (index === this.length) {
      this.push(newNode);
      return true;
    }
    let previousIndex = this.get(index - 1);
    newNode.next = previousIndex.next;
    previousIndex.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let preTargetNodeOnIndex = this.get(index - 1);
    let targetNodeOnIndex = preTargetNodeOnIndex.next;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }
    preTargetNodeOnIndex.next = targetNodeOnIndex.next;
    this.length--;
    return targetNodeOnIndex;
  }
}
/* 아니~ 왜 똑같이 따라쳤는데도 안돼????? 환장하겠네 아.. this.head.next가 아니라
this.tail.next였다... */
let list = new singleLinked();

console.log(list);
list.unshift("Hi");

console.log(list.remove(0));
console.log(list);
