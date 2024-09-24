let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.forEach((line) => {
  const [a, b] = line.split(" ");
  console.log(parseInt(a) + parseInt(b));
});
