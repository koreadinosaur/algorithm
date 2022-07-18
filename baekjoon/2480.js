const fs = require("fs");
const array = fs.readFileSync("/dev/stdin").toString().split(" ");
let newArr = array.map(Number);
const obj = {};
newArr.map((x) => {
  obj[x] = (obj[x] || 0) + 1;
});
const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
const arraylength = newArr.length;
const objlength = sorted.length;
if (arraylength === objlength) {
  const dice = sorted[sorted.length - 1][0];
  console.log(dice * 100);
} else {
  const dice = sorted[0][0];
  console.log(
    dice * 10 * 10 ** (arraylength - objlength) +
      1000 * 10 ** (arraylength - objlength - 1)
  );
}
