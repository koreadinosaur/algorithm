/* 코플릿 11번 */
function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let minLengthIndex = 0;
  let maxLengthIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    minLengthIndex =
      arr[minLengthIndex].length >= arr[i].length ? i : minLengthIndex;
    maxLengthIndex =
      arr[maxLengthIndex].length <= arr[i].length ? i : maxLengthIndex;
  }
  return arr.filter(
    (item, index) => index !== minLengthIndex && index !== maxLengthIndex
  );
}

const test = removeExtremes(["a", "b", "c", "def"]);
console.log(test);
