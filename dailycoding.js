/* 코플릿 10번 */
function insertDash(str) {
  let array = str.split("");
  let result = array.map((item, index) => {
    if (Number(item) % 2 !== 0 && Number(array[index - 1] % 2 !== 0)) {
      return `-${item}`;
    }
    return item;
  });
  return result.join("");
}
console.log(insertDash("454793"));
