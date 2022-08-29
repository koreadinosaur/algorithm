/* 코딩연습 7문제 : 인자로 전달된 배열과 length를 이용해 가장 큰 값을
반환하는 하위 배열을 찾으시오. 반환되는 배열은 인자로 전달된 배열에서
연속된 요소로 구성되어야 한다.
시간복잡도 : O(N)
공간복잡도 : O(1)
*/
function maxSubarraySum(array, length) {
  //배열요소의 합을 할당하는 변수 선언
  //배열의 array[0]부터 array[length-1]까지의 합을 초기값으로 선언.
  //array[0]을 빼고, array[length]를 추가. 이것을 배열 끝까지 반복하면서 값 비교하기.
  if (array.length < length) return null;
  let sumOfArray = 0;
  let maxOfArray = 0;
  for (let i = 0; i < length; i++) {
    sumOfArray += array[i];
  }
  let firstIndex = 0;
  let lastIndex = length;
  while (lastIndex <= array.length) {
    if (sumOfArray > maxOfArray) {
      maxOfArray = sumOfArray;
    }
    sumOfArray = sumOfArray - array[firstIndex] + array[lastIndex];
    firstIndex++;
    lastIndex++;
  }
  return maxOfArray;
}

const result = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
console.log(result);
