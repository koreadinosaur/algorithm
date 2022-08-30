/* 연습문제 10: 밑과 지수를 받아서 반환하는 재귀함수를 만들어라 */
function power(base, exponent) {
    //if(exponent === 1) return base; 는 왜 call stack 초과함??
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 4));
