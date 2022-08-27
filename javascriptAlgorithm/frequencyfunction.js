function same(array1, array2) {
  //array의 요소가 숫자 인지 아닌지 판별
  //두 배열을 각각 object에 key / value로 입력
  //object1의 key를 따로 배열로 만들기(순환시키기 위해서)
  //object1의 key값과 objeect2의 key제곱근의 값이 같은지 판별
  //object1의 모든 key에 대해서 loop를 돌고, true인지 false인지 반환
  const objectOfNumber = {};
  for (key of array1) {
    objectOfNumber[key] = objectOfNumber[key] + 1 || 1;
  }
  const objectOfSquare = {};
  for (key of array2) {
    objectOfSquare[key] = objectOfSquare[key] + 1 || 1;
  }
  const keyArr = Object.keys(objectOfNumber);
  for (key of keyArr) {
    if (
      objectOfNumber[key] !== objectOfSquare[Math.sqrt(objectOfNumber[key])]
    ) {
      return false;
    }
  }
  return true;
}
const arr = [1, 2, 3];
const arr2 = [1, 4, 9];
console.log(same(arr, arr2));
