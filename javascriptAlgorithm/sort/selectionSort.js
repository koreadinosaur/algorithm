/*선택정렬 의사코드
1. 최솟값을 저장할 변수 생성
2. 요소와 그 다음 요소를 비교하면서 최소값을 찾는다. 더 작은 값을 찾으면
변수에 저장하는데, 인덱스를 저장한다.
3. 배열을 순회할 때 시작했던 값이 최소값이 아니라면, 최소값과
시작값의 위치를 바꾼다.

 */
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}

const testArr = [
  1, 2, 3, 123, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 156, 15, 16, 17, 18,
];

console.log(selectionSort(testArr));
