/* 
의사코드
a. 배열, start index, end index 이 세 가지를 파라미터로 함수를 작성한다. 기본값은 start는 0, end는 array.length -1
b. 배열의 첫번째를 피벗으로 선택(이건 배열 끝, 중간 혹은 랜덤으로 정할수도 있다.)
c. 현재의 피벗 인덱스를 변수로 저장.(마지막까지 피벗의 위치를 확인한다)
d. 배열을 반복하는데, 피벗이 현재 요소보다 크면 피벗 인덱스를 증가시킨 후 현재 요소와 피벗 인덱스에 있는 요소를 바꾼다?
현재 요소보다 작으면 아무것도 안 해도 됨. */
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

//반환하는 값이 pivotIndex인 함수다.
//왜 end가 array.length +1 인지 이해가 안 됨.
function pivotHelper(array, start = 0, end = array.length + 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      //swapIndex + 1에 위치한 요소가 피벗보다 큰 요소임.
      swapIndex++;
      //그래서 swapIndex++이 되었을 때, swaopIndex에 위치한 요소는
      //pivot보다 더 큰 요소기 때문에 i와 자리 바꿔주면 된다.
      swap(array, swapIndex, i);
    }
  }
  swap(array, start, swapIndex);
  return swapIndex;
}

const testArr = [4, 8, 10, 1, 5, 7, 6, 3];

/* 퀵 정렬 함수
pivotHelper 함수로 좌우가 나뉘어지면, 거기서 재귀적으로
좌우에 퀵 정렬함수를 호출한다.
포인트는 새로운 배열을 만들지 말 것.
function quickSort(array) {
  if (array.length <= 1) return array;
  let firstPivotIndex = pivotHelper(array);
  console.log("--------");

  let leftArr = quickSort(array.slice(0, firstPivotIndex));
  let rightArr = quickSort(array.slice(firstPivotIndex + 1));
  console.log([...leftArr, array[firstPivotIndex], ...rightArr]);
  return [...leftArr, array[firstPivotIndex], ...rightArr];
}
console.log(quickSort(testArr));

이게되네?? 일단 정렬은 되는데 이렇게 푸는거 맞나?
아니네.. 나는 새로운 배열을 반환했고.. colt는 안했네  */

function quickSort(array, start = 0, end = array.length - 1) {
  console.log(array, start, end);
  if (start < end) {
    let pivotIndex = pivotHelper(array, start, end);
    let leftArr = quickSort(array, start, pivotIndex - 1);
    let rightArr = quickSort(array, pivotIndex + 1, end);
  }
  return array;
}

console.log(quickSort(testArr));
