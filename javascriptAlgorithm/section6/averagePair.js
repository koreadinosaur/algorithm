/*문제 : 정수로 이루어진 정렬된 배열과 평균을 받아서,
주어진 평균과 같은 평균값을 가지는 한 쌍이 있는지 확인하라
시간복잡도 : O(n), 공간복잡도 : O(1) */
function averagePair(array, targetAverage) {
  //배열 양 끝에서 시작하는 변수(i,j)를 선언
  //두 변수의 평균 > target average 이면 array[j--]
  //두 변수의 평균 < target average 이면 array[i++]
  //j와 i가 교차되면 false를 반환.
  const maxAverage = (array[array.length - 1] + array[array.length - 2]) / 2;
  const minAverage = (array[0] + array[1]) / 2;
  if (targetAverage > maxAverage || targetAverage < minAverage) {
    return false;
  }
  let i = 0;
  let j = array.length - 1;

  while (j > i) {
    let currentAverage = (array[i] + array[j]) / 2;
    if (currentAverage === targetAverage) {
      return true;
    }
    if (currentAverage > targetAverage) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}
const result = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
console.log(result);
