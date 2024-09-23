let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= max; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  answer += a + b + "\n";
}

console.log(answer);
