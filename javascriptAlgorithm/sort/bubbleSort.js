/* 버블정렬 구현:
1. 첫번째 루프(i)는 뒤에서 앞으로. 이유는 나중에 알려준다.
2. 내부루프(j) : 앞에서 i-1까지
3. j는 j+1과 비교한다. 그리고 arr[j]가 arr[j+1]보다 크면 교환한다. */
//교환식
function swap(arr, index1, index2) {
  //   let temporary = array[index1];
  //   array[index1] = array[index2];
  //   array[index2] = temporary;
  /* ES2015버전
   */
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function bubbleSort(array) {
  let count = 0;
  for (let i = array.length; i >= 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        isSwap = true;
      }
      count++;
    }
    if (!isSwap) break;
  }
  return array;
}
const testArr = [
  1, 2, 3, 123, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 156, 15, 16, 17, 18,
];

const testFunc = bubbleSort(testArr);
console.log(testFunc);
