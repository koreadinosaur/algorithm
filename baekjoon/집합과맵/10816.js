const input = require("fs").readFileSync("example.txt").toString().trim();

const [n, myCards, m, cards] = input.split("\n");
const cardsObj = {};
const cardsArr = cards.split(" ");
cardsArr.forEach((item) => (cardsObj[item] = 0));
myCards.split(" ").forEach((item) => {
  if (cardsObj[item] || cardsObj[item] === 0) {
    cardsObj[item] = cardsObj[item] + 1;
  }
});
let result = cardsArr.map((item) => cardsObj[item]);
console.log(result.join(" "));
