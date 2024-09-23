let input = require("fs").readFileSync("/dev/stdin").toString();

const max = input;
for (let i = 1; i <= input; i++) {
  const star = "*".repeat(i);
  const blank = " ".repeat(max - i);
  console.log(blank + star);
}
