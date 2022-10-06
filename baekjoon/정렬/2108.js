/* 최빈값이 여러개 있을 땐, 최빈값 중 두 번째로 작은 값을 출력하라.
이게 너무 어려운데?
의사코드
1. 일단 최빈값을 구한다.
2. 최빈값이 중복되는지 체크
3. 중복되면 최빈값끼리 비교.? */
let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const array = input.slice(1).map(Number);
const sortedArray = array.sort((a, b) => a - b);

const central = (sortedArray.length - 1) / 2;
const scope = Math.max(...array) - Math.min(...array);
function getAverage(array) {
  const average = array.reduce((acc, cur) => acc + cur) / array.length;
  if (average < 0 && average > -1) return 0;
  return Math.round(average);
}
function getMode(array) {
  /* key는 array의 값, value는 빈도수 */
  const frequency = {};
  for (let i = 0; i < array.length; i++) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1;
  }
  /*frequency 객체의 key와 value를 바꾸는 작업.  */
  const newObj = {};
  for (let key in frequency) {
    newObj[frequency[key]] = newObj[frequency[key]]
      ? [...newObj[frequency[key]], Number(key)]
      : [Number(key)];
  }
  const maxFrequency = Math.max(...Object.keys(newObj));
  /*최대 빈도수가 여러개인 경우 두 번째로 작은 값 출력 */
  if (newObj[maxFrequency].length > 1) {
    return newObj[maxFrequency].sort((a, b) => a - b)[1];
  }
  return newObj[maxFrequency].sort((a, b) => a - b)[0];
}
console.log(getAverage(array));
console.log(sortedArray[central]);
console.log(getMode(sortedArray));
console.log(Math.abs(scope));

/* TIL
Sort는 인자를 생략할 시에 오름차순이지만 배열 안의 요소가
음수면, 절대값인 상태에서 오름차순을 한다. 음수까지 오름차순하려면
(a,b) => a-b를 전달해야한다. */
