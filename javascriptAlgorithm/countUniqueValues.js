function countUniqueValues(array) {
  //고유한 숫자가 몇 개 인지 카운팅하기
  //index 0과 1에서 두 변수(i,j)를 이용해 loop문을 적용시킨다.
  //이동 방향이 0에서 array.length 방향으로 같은 방향으로 움직인다.
  //j를 먼저 이동시키고 i랑 비교한 후 j가 더 크면 i를 한 칸 이동 시킨 후
  //요소의 위치를 i의 현재 요소와 바꾼다. [1,1,2,3,4] 가 [1,2,1,3,4] 이렇게 되는거임.
  //이걸 반복한다. 요소 바꾸는거 어떻게 하지??
  let i = 0;
  let j = 1;
  let newArr = array;
  while (j < array.length) {
    if (newArr[i] === newArr[j]) {
      j++;
    }
    if (newArr[i] !== newArr[j]) {
      i++;
      newArr[i] = newArr[j];
      j++;
    }
    if (j === array.length) {
      i++;
      break;
    }
  }
  return i;
}
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
