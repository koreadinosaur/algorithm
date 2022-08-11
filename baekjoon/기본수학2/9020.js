const fs = require("fs");
const number = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= number[0]; i++) {
  let n = number[i];
  let array = Array.from({ length: number[i] }, (_, x) => x + 1);
  //일단 1부터 테스트 케이스 수까지 배열 생성

  let newArr = array.filter((x) => {
    if (x === 1) return false;
    for (let j = 2; j <= Math.sqrt(x); j++) {
      if (x % j === 0) {
        return false;
      }
    }
    return true;
  });
  //해당 배열에서 소수 필터

  let primeNumber = newArr.filter((x) => {
    if (number[i] - x === 1) return false;
    for (let j = 2; j <= Math.sqrt(number[i] - x); j++) {
      if ((number[i] - x) % j === 0) {
        return false;
      }
    }
    return true;
  });
  //테스트 케이스 - 소수가 소수인 것 필터
  const a = primeNumber[Math.ceil(primeNumber.length / 2) - 1];
  //배열의 요소가 대칭을 이루어 합이 테스트 케이스가 되는 것을 이용.
  console.log(a, number[i] - a);
}
