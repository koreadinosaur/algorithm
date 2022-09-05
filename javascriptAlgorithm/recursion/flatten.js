function flatten(array) {
  if (array.length === 0) return [];
  console.log(array);
  if (Array.isArray(array[0])) {
    return flatten([...array[0], ...array.slice(1)]);
  }
  return [array[0]].concat(flatten(array.slice(1)));
}

const test = [1, [2, 3, [4, 5, [6, 7]]]];

console.log(flatten(test));
