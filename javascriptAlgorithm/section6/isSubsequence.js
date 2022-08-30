/*코딩연습6: 두 문자열을 받아서 첫번째 문자열에 있는
문자들이 두 번째 문자열에 있는지 확인하라, 순서는 같아야 함
시간복잡도 최소기준 : O(N+M) */
function isSubsequence(firstString, secondString) {
  //firstString의 length가 더 길면 false 반환
  //firstString 문자열의 첫 글자가 secondString의 첫글자와 같은지 확인
  //각 문자열의 루프를 돌기 위해 변수 i와 j 선언.
  //일치하면 i++, 불일치하면 j++
  //firstString.length - i > secondString.length - j면 false 반환
  //i === firstString.length가 되면 true 반환
  if (firstString.length > secondString.length) return false;
  let i = 0;
  let j = 0;
  while (i < firstString.length) {
    //refactoring : 여기서 j++은 if문과 else문 둘 다 들어가니까
    //while문 마지막에 j++ 해줘도 됨.
    if (firstString[i] === secondString[j]) {
      i++;
      j++;
      if (i === firstString.length) return true;
    } else {
      j++;
    }
    if (j === secondString.length) return false;
  }
}
const result = isSubsequence("abc", "acb");
console.log(result);
