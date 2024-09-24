let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ").map(Number);
const target = parseInt(input[2]);

const answer = numbers.reduce((acc, cur) => {
  if (cur === target) {
    return (acc += 1);
  }
  return acc;
}, 0);

console.log(answer);

// filter 사용 예시
// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const numbers = input[1].split(" ").map(Number);
// const target = parseInt(input[2]);

// const answer = numbers.filter(num => num === target).length;

// console.log(answer);