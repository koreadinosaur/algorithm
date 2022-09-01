/* 문제 : targetString 안에 찾고자하는 string이 몇개 있는지 반환 */
function stringSearch(searchString, targetString) {
  //targetString을 순환하면서 searchstring의 첫번째 글자와 비교
  //일치하면 두 번째 글자와 비교, searchString의 끝까지 비교하고,
  //모두 일치한다면 count++;
  //불일치하면 targetString의 다음 글자와 searchString의 첫글자부터
  //다시 비교. 반복문이 두 개 있어야 함.
  let count = 0;

  for (let i = 0; i < targetString.length; i++) {
    for (let j = 0; j < searchString.length; j++) {
      if (targetString[i + j] !== searchString[j]) {
        break;
      }
      if (j === searchString.length - 1) {
        count++;
      }
    }
  }
  return count;
}
const test = stringSearch("omg", "wowomgzomg");
console.log(test);
