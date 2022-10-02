/* 
의사코드
1. hash 함수의 인자는 string과 배열의 길이다.
2. 유니코드를 이용해서 각 문자에 맞는 숫자 출력
'char'.charCodeAt() - 96은 문자의 알파벳 순서대로 숫자를 출력해준다.
a면 1, b면 2, 이런식으로 출력됨. */
function hash(string, length) {
  let result = 0;
  for (let key of string) {
    let hashedKey = key.charCodeAt(0) - 96;
    result = (result + hashedKey) % length;
  }
  return result;
}
const test = hash("hello", 10);
console.log(test);
/* 개선 요소
1. only string만 가능하다는 점.
2. 시간 복잡도가 상수가 아니라는 것.(현재는 O(N)이다.)
3. 해시 결과가 겹치는 부분을 좀 더 최소화 해야 한다. 힌트 : 소수 사용 */
