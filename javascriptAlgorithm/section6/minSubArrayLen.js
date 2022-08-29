/* 양의 정수로 이루어진 배열(array), 양의 정수(number)를 두 인자로 받아 반환하는 함수
함수는 하위 배열의 합이 양의 정수(number)보다 같거나 큰 값을 반환하는 배열 중
가장 작은 length를 가진 하위 배열을 찾아야 한다.
시간복잡도 : O(n)
공간복잡도 : O(1) */
function minSubArrayLen(array, number) {
  //일단 length가 1일 때, number보다 큰 경우 true 반환.(이거는 max값으로 하면 되나?)
  //2일 때, 3일 때,....array.length일 때까지 loop문을 돌려서
  //확인해야하나..? 이러면 O(n)이 맞는건가? 이러면 O(n)이 아닌 것 같고.
  //array에서 max인 요소의 index를 구한 후에, 그 인덱스를 기준으로 양옆으로
  //확장? 해나가야할 듯.
  let oneMax = Math.max(...array);
  if (oneMax >= number) return 1;
  let sum = oneMax;
  let length = 1;
  let less = 1;
  let more = 1;
  let maxIndex = array.indexOf(oneMax);
  while (length <= array.length) {
    if (
      array[maxIndex + more] >= array[maxIndex - less] &&
      maxIndex + more <= array.length
    ) {
      sum += array[maxIndex + more];
      more++;
    } else if (
      array[maxIndex + more] <= array[maxIndex - less] &&
      maxIndex - less >= 0
    ) {
      sum += array[maxIndex - less];
      less++;
    }
    length++;
    if (sum >= number) return length;
  }
  return 0;
}

const result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
console.log(result);
