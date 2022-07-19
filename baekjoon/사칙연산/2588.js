const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("");
const a = input[0];
const b = input[1];
const c = input[2];
const d = input[4];
const e = input[5];
const f = input[6];
const abc = a + b + c;
console.log(abc * f);
console.log(abc * e);
console.log(abc * d);
console.log(abc * f + abc * e * 10 + abc * d * 100);

//-----------------------------------
/* const fs = require("fs");
const [num1, num2] = fs.readFileSync("example.txt").toString().split("\n");
const splitNum2 = num2.split("").map((x) => x * 1);
const result = splitNum2.map((x) => x * +num1);
console.log(result.reverse().join("\n"));
console.log(+num1 * +num2); */
