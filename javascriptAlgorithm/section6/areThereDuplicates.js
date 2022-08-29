function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    obj[arguments[i]] = (obj[arguments[i]] || 0) + 1;
    if (obj[arguments[i]] === 2) {
      return true;
    }
  }
  return false;
}

const test = areThereDuplicates(1, 2, 2);
console.log(test);
