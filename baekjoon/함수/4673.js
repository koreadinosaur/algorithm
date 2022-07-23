function sequence(a) {
  let b = a;
  let result = a;
  for (let i = 0; i < a.toString().length; i++) {
    result += b % 10;
    b = parseInt(b / 10);
  }
  return result;
}

let selfNumber = Array(10000)
  .fill()
  .map((x, i) => i);

for (let i = 0; i < 10001; i++) {
  selfNumber[sequence(i)] = false;
}

console.log(selfNumber.filter((x) => x).join("\n"));
