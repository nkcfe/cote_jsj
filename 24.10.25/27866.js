const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function resolve(S, i) {
  return S[i - 1];
}

console.log(resolve(input[0], input[1]));
