/* 연습문제 11 : number를 전달받아서, number 팩토리얼을 구하시오 */
function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
}
console.log(factorial(7));
