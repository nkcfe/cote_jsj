let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = 0;

while (true) {
  const [a, b] = input[count].split(" ").map(Number);
  if (a === 0 && b === 0) {
    break;
  }
  count++;
  console.log(a + b);
}
