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
  insert(val) {
    /* 의사코드
    1. 배열 맨 뒤에 push
    2. 알맞은 자리를 찾아 버블 업
    3. 부모 노드와 비교해서 값이 더 크면 swap한다.
    3. parent Index는 Math.floor((index-1)/2) */
    function swap(array, i, j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.heapTree.push(val);
    let currentIndex = this.heapTree.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.heapTree[currentIndex] > this.heapTree[parentIndex]
    ) {
      swap(this.heapTree, currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
    return this.heapTree;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(5);
heap.insert(15);
heap.insert(7);
heap.insert(2);
heap.insert(29);
heap.insert(20);
console.log(heap); //heapTree: [ 29, 15, 20, 2, 5, 7 ]
