let input = require("fs").readFileSync("example.txt").toString().trim();
input = +input;
function star(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += recursiveStar(i, j, num);
    }
    result += "\n";
  }
  return result;
}
function recursiveStar(x, y, size) {
  if (x % 3 !== 1 || y % 3 !== 1) {
    if (size > 3) {
      return recursiveStar(
        parseInt(x / 3),
        parseInt(y / 3),
        parseInt(size / 3)
      );
    }
    return "*";
  } else {
    return " ";
  }
}

console.log(star(input));
