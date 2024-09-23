let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
