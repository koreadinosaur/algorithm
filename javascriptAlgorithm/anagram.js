// 섹션5, 코딩 연습1
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let str of str1) {
    obj1[str] = (obj1[str] || 0) + 1;
  }
  //obj2는 만들 필요 없었음.
  //   for (let i = 0; i < str2.length; i++) {
  //     let letter = str2[i];
  // obj1이 존재하지 않거나 값이 0이면 false를 반환하고, 아니면 1을 뺀다.
  //     if (!obj1[letter]) {
  //       return false;
  //     } else {
  //       obj1[letter] -= 1;
  //     }
  //   }
  // 이렇게 str2과 obj1만을 이용해서 바로 답을 도출할 수 있음.
  for (let key of str2) {
    obj2[key] = (obj2[key] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

const a = "cocacola";
const b = "cocaaala";

console.log(validAnagram(a, b));
