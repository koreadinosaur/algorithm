/* 기수정렬 */

function getDigit(number, digit) {
  const exponentiation = 10 ** digit;
  return Math.floor(number / exponentiation) % 10;
}

function digitCount(number) {
  return String(number).length;
  //return Math.floor(Math.log10(Math.abs(number))) + 1
}

function mostDigit(array) {
  let maxDigit = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(array[i]));
  }
  return maxDigit;
}

/* 
기수정렬 의사코드
1. 배열에서 가장 큰 수의 자릿수 a 반환
2. k = 0부터 a까지 bucket 생성
    1) bucket은 빈배열이며 0부터 9까지 하위 배열이 10개 있는 배열
    2) loop를 수행할 때마다 각 수를 버킷에 저장
3.  */
function radixSort(array) {
  let maxLoop = mostDigit(array);
  for (let i = 0; i < maxLoop; i++) {
    let bucketArray = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < array.length; j++) {
      let digit = getDigit(array[j], i);
      bucketArray[digit].push(array[j]);
    }
    array = [].concat(...bucketArray);
    console.log(array);
  }
  return array;
}
console.log(radixSort([111, 2, 3333, 4, 55]));
