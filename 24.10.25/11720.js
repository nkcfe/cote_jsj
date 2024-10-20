const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const q = input[1];

let answer = 0;
for (let i = 0; i < N; i++) {
  answer += Number(q[i]);
}

console.log(answer);
