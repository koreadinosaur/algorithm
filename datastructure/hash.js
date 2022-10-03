/* 
의사코드
1. hash 함수의 인자는 string과 배열의 길이다.
2. 유니코드를 이용해서 각 문자에 맞는 숫자 출력
'char'.charCodeAt() - 96은 문자의 알파벳 순서대로 숫자를 출력해준다.
a면 1, b면 2, 이런식으로 출력됨. */
/* 개선 요소
1. only string만 가능하다는 점.
2. 시간 복잡도가 상수가 아니라는 것.(현재는 O(N)이다.)
3. 해시 결과가 겹치는 부분을 좀 더 최소화 해야 한다. 힌트 : 소수 사용 */

/* 충돌 처리하기
1. Separte Chaining 
 - hash의 결과값(index)에 모두 배열로 저장한 다음
index에 접근하면 배열을 순회하면서 찾고자하는 값을 반환한다.
 - loop가 중첩된다는 단점이 있지만 배열의 길이 이상으로 데이터를 저장할 수 있다. 
2. Linear Probing(직선 탐색법)
 - 각 위치에 하나의 데이터만 저장한다.*/
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let result = 0;
    let PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let hashedKey = key[i].toLowerCase().charCodeAt(0) - 96;
      result = (result * PRIME_NUMBER + hashedKey) % this.keyMap.length;
    }
    return result;
  }
  /* set
  1. key와 value를 인자로 전달 받는다
  2. 키를 해시한다
  3. key - value 쌍을 해시 테이블 array에 저장한다. 이 때 separate chaining을 한다.
   get
   1. key를 전달받는다
   2. 키를 해시한다.
   3. 해시 테이블에 있는 key-value 쌍을 반환한다.
   4. 키가 배열에 없으면 undefined 반환한다. */
  setHash(key, value) {
    let hashedKey = this._hash(key);
    this.keyMap[hashedKey] = this.keyMap[hashedKey]
      ? [...this.keyMap[hashedKey], [key, value]]
      : [[key, value]];
  }
  getHash(key) {
    let hashedKey = this._hash(key);
    for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
      if (this.keyMap[hashedKey][i].indexOf(key) !== -1) {
        return this.keyMap[hashedKey][i][1];
      }
    }
    return undefined;
  }
}

let hashTable = new HashTable();
hashTable.setHash("ALeeSoonShin", "#15cbaq");
hashTable.setHash("ALeeSoonShin", "#60jihz");

console.log(hashTable.getHash("ALeeSoonShin"));
