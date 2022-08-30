/* 연습 12: 배열을 받아서 배열 내 모든 요소들의 곱을 구하시오 */
function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}
console.log(productOfArray([1, 2, 3, 10]));
