/* 의사코드
1. 이진힙과 매우 비슷하다.
2. PriorityQueue 클래스 생성
3. values를 빈배열로 설정. 
4. 노드 객체를 만들고, 값과 우선순위에 대한 정보를 담는다.
5.extractMax()와 반대 개념이다. 우선순위가 낮을수록 tree의 위에 위치한다.
6. 이진힙에서 insert()메서드와 같은 역할을 하는 enqueue 메서드, extractMax()는 dequeue
7.
*/
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }
  swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  enqueue(val, priority) {
    /* 의사코드
    1. 배열 맨 뒤에 push
    2. 알맞은 자리를 찾아 버블 업
    3. 부모 노드와 비교해서 값이 더 크면 swap한다.
    3. parent Index는 Math.floor((index-1)/2) */
    const node = new Node(val, priority);
    this.value.push(node);
    let currentIndex = this.value.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.value[currentIndex].priority < this.value[parentIndex].priority
    ) {
      this.swap(this.value, currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
    return this.value;
  }
  dequeue() {
    /* 1. root와 맨 마지막 값을 교환하고, root였던 값을 제거한다.
    2. 그리고 root가 된 값을 자식 요소들과 비교하면서 자리를 바꿔준다.
    3. 자식 둘다 root보다 크다면, 자식들 중 더 큰 요소와 바꾼다.  */

    this.swap(this.value, 0, this.value.length - 1);
    const poped = this.value.pop(this.value.length - 1);
    let currentIndex = 0;
    while (true) {
      let leftChild = currentIndex * 2 + 1;
      let rightChild = currentIndex * 2 + 2;

      let higherPriorityChildIndex =
        this.value[rightChild] &&
        this.value[leftChild].priority > this.value[rightChild].priority
          ? rightChild
          : leftChild;

      if (
        this.value[higherPriorityChildIndex] &&
        this.value[currentIndex].priority >
          this.value[higherPriorityChildIndex].priority
      ) {
        this.swap(this.value, currentIndex, higherPriorityChildIndex);
        currentIndex = higherPriorityChildIndex;
      }
      if (
        (!this.value[leftChild] ||
          this.value[currentIndex].priority < this.value[leftChild].priority) &&
        (!this.value[rightChild] ||
          this.value[currentIndex].priority < this.value[rightChild].priority)
      ) {
        break;
      }
    }
    return poped;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(5, 5);
priorityQueue.enqueue(10, 4);
priorityQueue.enqueue(15, 3);
priorityQueue.enqueue(20, 2);
priorityQueue.enqueue(18, 1);
priorityQueue.enqueue(51, 9);
priorityQueue.enqueue(63, 15);
priorityQueue.dequeue();
console.log(priorityQueue);
