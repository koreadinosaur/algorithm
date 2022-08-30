/*문제 : 문자열을 받아서 고유한 문자들만 있는 하위 문자열 중 가장 긴 length를 구하시오
시간복잡도 : O(n) */

function findLongestSubstring(string) {
  //substr(start,index) 메서드를 이용해서 첫 글자부터 잘라서 고유문자 여부를 확인한다.
  //만약 고유문자가 아니라면, length는 그대로 두고 start만 +1하고, 고유문자 여부 확인.
  //고유문자만 있으면 다시 length를 늘린다. 이거 반복하면 되겠는데??
  let startIndex = 0;
  let length = 1;
  let subString = string.substr(startIndex, length);
  let i = 0;
  while (i < string.length) {
    if (subString.length === new Set(subString).size) {
      length++;
    } else {
      startIndex++;
    }
    subString = string.substr(startIndex, length);
    i++;
  }
  //일단 subString.length === new Set(subString).size면 length가 +1 되기 때문에
  //그 이후에 동일하지 않아도 length는 +1인 채로 반환됨. -1을 해주면 된다.
  return length - 1;
}

const result = findLongestSubstring("thisishowwedoit");
console.log(result);
