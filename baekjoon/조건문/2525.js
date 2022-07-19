const fs = require("fs");
const [line1, line2] = fs.readFileSync("example.txt").toString().split("\n");
const [a, b] = line1.split(" ");
let hour = a * 1;
let minutes = b * 1;
minutes += +line2;
const share = parseInt(minutes / 60);
if (minutes >= 60) {
  hour += 1 * share;
  minutes -= 60 * share;
  if (hour >= 24) {
    hour -= 24;
  }
}
console.log(hour, minutes);
