const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map(Number);
let flag = 0;
let result = 0;

for (let i = 0; i < n; i++) {
  const top = arr.pop();
  if (top > flag) {
    flag = top;
    result++;
  }
}

console.log(result);
