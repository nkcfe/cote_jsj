let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = Array.from({ length: 30 }, (_, idx) => idx + 1);

input.forEach((num) => {
  const target = arr.indexOf(parseInt(num));
  console.log(target);
  arr[target] = 0;
});

const filter = arr.filter((num) => num !== 0);
console.log(filter[0]);
console.log(filter[1]);
