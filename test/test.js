const getCount = (function () {
  let count = 1;
  return function () {
    ++count;
    return count;
  };
})();

console.log(getCount()); // 2
console.log(getCount()); // 3
console.log(getCount()); // 3
console.log(getCount()); // 3
console.log(getCount()); // 3
