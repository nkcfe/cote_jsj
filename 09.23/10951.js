let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = 0;

while (true) {
  if (input[count] === undefined) break;
  const [a, b] = input[count].split(" ").map(Number);
  count++;
  console.log(a + b);
}
