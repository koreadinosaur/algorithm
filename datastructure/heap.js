/* 이진 힙
1. heap class에 constructor는 빈 배열 하나 뿐이다.
2. 트리구조의 데이터를 배열 데이터로 해석?할 것이기 때문.
3. 트리 구조가, 왼쪽부터 채워나가고, 자식은 부모보다는 작은 성질이기
때문에 부모의 인덱스는 자식인덱스의 2n+1 또는 2n+2의 값을 가진다.
4. 그래서 노드를 하나하나 left,right로 연결하는 것 대신에 배열의
인덱스를 기준으로 트리구조를 모형화 시킬 것. */

class MaxBinaryHeap {
  constructor() {
    this.heapTree = [];
  }
  swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  insert(val) {
    /* 의사코드
    1. 배열 맨 뒤에 push
    2. 알맞은 자리를 찾아 버블 업
    3. 부모 노드와 비교해서 값이 더 크면 swap한다.
    3. parent Index는 Math.floor((index-1)/2) */
    this.heapTree.push(val);
    let currentIndex = this.heapTree.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.heapTree[currentIndex] > this.heapTree[parentIndex]
    ) {
      this.swap(this.heapTree, currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
    return this.heapTree;
  }
  extractMax() {
    /* 1. root와 맨 마지막 값을 교환하고, root였던 값을 제거한다.
    2. 그리고 root가 된 값을 자식 요소들과 비교하면서 자리를 바꿔준다.
    3. 자식 둘다 root보다 크다면, 자식들 중 더 큰 요소와 바꾼다.  */
    this.swap(this.heapTree, 0, this.heapTree.length - 1);
    const poped = this.heapTree.pop(this.heapTree.length - 1);
    let currentIndex = 0;
    while (true) {
      console.log(this.heapTree);
      let leftChild = currentIndex * 2 + 1;
      let rightChild = currentIndex * 2 + 2;
      let largerChildIndex =
        this.heapTree[rightChild] &&
        this.heapTree[leftChild] < this.heapTree[rightChild]
          ? rightChild
          : leftChild;
      if (this.heapTree[currentIndex] < this.heapTree[largerChildIndex]) {
        this.swap(this.heapTree, currentIndex, largerChildIndex);
        currentIndex = largerChildIndex;
      }
      if (
        (this.heapTree[currentIndex] > this.heapTree[leftChild] ||
          !this.heapTree[leftChild]) &&
        (this.heapTree[currentIndex] > this.heapTree[rightChild] ||
          !this.heapTree[rightChild])
      ) {
        break;
      }
    }
    return poped;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax());
console.log(heap);
