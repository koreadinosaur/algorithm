/* 배열 내 숫자 index 찾기 */
function binarySearch(array, number) {
  //변수는 세 개. left index ,middle index , right index
  //만약 number가 middel보다 크면, left를 middle로.
  // number가 middle보다 작으면, right를 middle로.
  //middle은 (right - left) / 2 + left index  하면 될 것 같은데??

  let leftEndOfArray = 0;
  let rightEndOfArray = array.length - 1;
  let middle =
    Math.floor((rightEndOfArray - leftEndOfArray) / 2) + leftEndOfArray;
  while (leftEndOfArray < rightEndOfArray) {
    if (array[middle] === number) {
      return middle;
    } else if (array[middle] > number) {
      //여기서 middle과 같은 값을 할당해주지 말고, middle에서 -1 해줘야함.
      rightEndOfArray = middle;
    } else if (array[middle] < number) {
      //여기도 마찬가지로 +1해줘야함.
      leftEndOfArray = middle;
    }
    //Math.floor하면,left가 3, rifht가 4인경우 middle과 left의 값이
    //계속 3이나오면서 무한루프 됨.
    middle = Math.ceil((rightEndOfArray - leftEndOfArray) / 2) + leftEndOfArray;
  }
  return -1;
}
const test = binarySearch([1, 2, 3, 4, 5], 6);

console.log(test);
