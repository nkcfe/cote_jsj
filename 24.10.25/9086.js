const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const test = input.slice(1);

function resolve(T, test) {
  const answer = [];
  for (let i = 0; i < T; i++) {
    const cur = test[i];

    const first = cur[0];
    const last = cur[cur.length - 1];
    console.log([first, last].join(""));
  }
}

resolve(T, test);
