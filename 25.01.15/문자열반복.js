const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
const test = input.slice(1);

for (let i = 0; i < t; i++) {
  const [number, string] = test[i].split(" ");

  const answer = [...string].map((char) => char.repeat(number)).join("");

  console.log(answer);
}
