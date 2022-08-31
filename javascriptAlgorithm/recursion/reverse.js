/*재귀 심화 15번 : string을 받아서 거꾸로 출력하는 재귀함수 */
function reverse(string) {
  //charAt은 문자열의 특정 인덱스에 있는 값을 반환, 기본값은 0
  if (string.length === 0) return "";
  return reverse(string.substring(1)) + string.charAt();
}

const test = reverse("awesome");
console.log(test);
