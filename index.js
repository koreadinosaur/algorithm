let Array1 = Array.from({ length: 4 }, () => []);
let Array2 = Array(4).fill([]);
Array1[0].push(1);
Array2[0].push(1);

console.log(Array1, "\n", Array2);
