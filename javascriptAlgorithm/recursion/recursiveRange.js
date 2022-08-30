/* 연습문제 13 : 숫자를 받아서 0부터 숫자까지의 합을 구하시오 */
function recursiveRange(number) {
  if (number === 0) return 0;
  return number + recursiveRange(number - 1);
}
