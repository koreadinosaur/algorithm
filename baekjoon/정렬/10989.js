/*카운팅정렬 
indexArr에서 또 이전 엘리먼트까지의 누적값으로 배열을만들고,
다시 새 배열로 만드는 알고리즘이 너무 복잡해서 map으로 했는데 메모리 초과 떴다.. 
찾아보니 node.JS로는 메모리 초과가 돼서 못푼단다. */
let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const newArr = input.map(Number).slice(1);
const maxOfArray = Math.max(...newArr);
const indexArr = new Array(maxOfArray).fill(0);
for (let i = 0; i < newArr.length; i++) {
  indexArr[newArr[i]] = (indexArr[newArr[i]] || 0) + 1;
}
const result = [];
indexArr.map((item, index) => {
  for (let i = 0; i < item; i++) {
    result.push(index);
  }
});
console.log(result.join("\n"));
