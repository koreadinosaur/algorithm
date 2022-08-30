/* 연습 14: 숫자를 받아서 피보나치 수열에서의 n번째 수를 구하시오. */
function fib(number) {
  if (number <= 2) return 1;
  return fib(number - 1) + fib(number - 2);
}
