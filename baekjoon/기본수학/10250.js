const fs = require("fs");
const number = fs.readFileSync("example.txt").toString().trim().split("\n");
for (let i = 1; i <= number[0]; i++) {
  const [H, W, N] = number[i].split(" ").map(Number);
  console.log(
    (N % H === 0 ? H : N % H) +
      Math.ceil(N / H)
        .toString()
        .padStart(2, "0")
  );
}
