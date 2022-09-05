/* 버블,삽입,선택정렬에 비해서 매우매우 효율적인 정렬.
분할, 정렬, 합병의 조합으로 이루어져있다.
1. 분할 : 배열을 분할하여 새로운 배열을 만드는데, 배열의 요소가 1개가
될 때까지 배열을 분할한다. length가 8인 배열을 분할하면
8개의 배열이 나와야 한다.
2. 합병 : 이제 8개로 분할된 배열을 2개씩 합병하는데, 정렬을 시킨다.
마찬가지로 2개씩 합병된 배열을 다시 정렬하면서 4개씩 합병한다.
마지막으로 8개의 요소가 정렬된 하나의 배열로 합병한다.  
-----------------
합병 알고리즘
1. 두 정렬된 배열을 합치는 함수를 만든다.(정렬은 오름차순이든
내림차순이든 통일되어야 한다.)
2. 정렬된 두 배열이 주어지면, 함수는 정렬된 새로운 배열을
반환해야하고, 인자로 전달된 두 배열의 모든 요소가 들어가 있어야 한다.
3. 이 함수의 시간복잡도는 O(n+m)이다.(전달된 각 배열의 길이)
의사코드
1. 마지막에 반환할 빈배열을 만들고, 각각의 input array에 대해 
가장 작은 값부터 시작하는 반복문을 생성한다.
2. while문으로하며, 변수는 i와 j 두개다.
3. 첫번째 배열의 첫 번째 요소값과 두 번째 배열의 첫번째 요소값을
비교한 후, 더 작은 값을 빈 배열에 넣는다. 그리고 다시 두 배열의 값을 비교하고,
더 작은 값을 넣는다.
4.둘 중 한 배열에서 변수 i나 j가 끝까지 도달했다면 나머지 배열의 값을 모두
넣는다.
 */

function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (arr1.length > i || arr2.length > j) {
    if (arr1[i] <= arr2[j] || arr2.length === j) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j] || arr1.length === i) {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
}

// console.log(merge([1, 5, 9, 13, 15], [2, 8, 10]));

/* 분할 알고리즘
재귀함수, slice를 이용하여 분할.
이건 못풀었다.. 재귀를 사용하면 [[[1],[2]],[[3,[4,5]]]] 이런식으로 나오는데
배열의 depth를 어떻게 풀어나가면서 반환을 해야하는지 모르겠다.
와.. 답을 보고 나니 쪼갠 후에 바로 merge(병합)을 해주는 게 답이었다.
나는 단순히 [[1],[2],[3],[4]] 이런식으로 만들어 놓고나서 다음 단계로
나아가는 줄 알았는데 그게 아니었다. 재귀함수로 일단 length를 1까지 쪼갠 후
거기서 merge를 바로 return 해주는 거였다. */

function sliceAndMerge(array) {
  if (array.length <= 1) return array;
  const center = Math.floor(array.length / 2);
  let leftArray = sliceAndMerge(array.slice(0, center));
  let rightArray = sliceAndMerge(array.slice(center));
  return merge(leftArray, rightArray);
}

const test2 = [123, 5, 42, 3, 1, 12];

sliceAndMerge(test2);
