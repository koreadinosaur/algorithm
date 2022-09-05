/* 삽입정렬 : 왼쪽부터 점차적으로 정렬을 해나가야함. */
function insert(array, index1, index2) {
  const lower = array.splice(index1, 1)[0];
  array.splice(index2, 0, lower);
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentIdx = i;
    /* 리팩토링 : for 반복문에 조건식을
    j >= 0 && arr[j] > array[currentIdx]로 변경.
    colt는 그냥 arr[j+1] = arr[j]로 해서 계속 배열을
    바꿔나가면서 마지막 j에 대해서만 arr[j+1] = arr[currentIdx];
    arr[j+1]인 이유는 for문의 증감식이 j--이므로 array[j]<=array[i]라는
    조건을 충족하면 for문이 실행되지 않는데 그 직전 루프에서
    j가 -1이 됐기 때문에, 실질적으로 arr[currentIdx]가 들어가야할 곳은
    arr[j+1]이다.
    [1,2,3,57,4] 생각하면 됨.
    이런식으로 했는데 이것보다는 splice가 낫지않나?
     */

    for (var j = i - 1; j >= 0 && array[j] > array[i]; j--) {
      if (array[i] < array[j]) {
        currentIdx = j;
      }
    }
    console.log(j);
    insert(array, i, currentIdx);
  }
  return array;
}
const testArr = [
  1, 2, 3, 123, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 156, 15, 16, 17, 18,
];

console.log(insertionSort(testArr));

// const testArr = [5, 3, 4, 7, 9];
// const min = testArr.splice(1, 1);
// const insert = testArr.splice(0, 0, min[0]);
// console.log(testArr, min);
