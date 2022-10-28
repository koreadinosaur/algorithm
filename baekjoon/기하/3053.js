const input = require("fs").readFileSync("example.txt").toString().trim();
let r = Number(input);
let euclid = Math.PI * r * r;
let taxi = 2 * r * r;
console.log(euclid.toFixed(6));
console.log(taxi.toFixed(6));
