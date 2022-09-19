/* 재귀 심화 16 : 거꾸로 읽어도 우영우인지 bollean 반환 */
function isPalindrome(string) {
  console.log(string);
  if (string.length <= 1) return true;
  if (string[0] !== string[string.length - 1]) return false;
  // const newString = string.substring(1);
  // return isPalindrome(newString.slice(0, newString.length - 1));
  return isPalindrome(string.slice(1, -1));
}

const test = isPalindrome("amanaplanacanalpanama");
console.log(test);
