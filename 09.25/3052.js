let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const divide = (input) => {
  const arr = input.map((num) => num % 42);
  const set = new Set(arr);
  return set.size
};

console.log(divide(input));
