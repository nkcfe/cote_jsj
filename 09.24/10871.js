let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const target = input[0].split(" ")[1];
const arr = input[1].split(" ").map(Number);
const filterArr = arr.filter((num) => num < target);

console.log(filterArr.join(" "));
