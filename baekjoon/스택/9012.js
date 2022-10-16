const input = require("fs").readFileSync("example.txt").toString().trim();
let newArray = input.split("\n").slice(1);
let result = [];
for (let i = 0; i < newArray.length; i++) {
  let vpsString = newArray[i];
  while (vpsString.length >= 1) {
    let isPoped = false;
    for (let j = 0; j < vpsString.length; j++) {
      if (vpsString[j] === "(" && vpsString[j + 1] === ")") {
        isPoped = true;
        vpsString = vpsString.slice(0, j) + vpsString.slice(j + 2);
      }
    }
    if (!isPoped) break;
  }
  if (vpsString === "") {
    result.push("YES");
  } else {
    result.push("NO");
  }
}
console.log(result.join("\n"));
