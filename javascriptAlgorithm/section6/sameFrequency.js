function sameFrequency(num1, num2) {
  const obj = {};
  for (let number of num1.toString()) {
    obj[number] = (obj[number] || 0) + 1;
  }
  for (let number of num2.toString()) {
    if (!obj[number]) {
      return false;
    }
    obj[number] -= 1;
  }
  return true;
}

const result = sameFrequency(3589578, 5879385);
console.log(result);
