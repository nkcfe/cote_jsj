const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = input.concat(line.split(" ").map((el) => parseInt(el)));
  })
  .on("close", function () {
    const a = input[0];
    const b = input[1];
    const c = input[2];

    if (a === b && b === c) {
      console.log(10000 + a * 1000);
    } else if (a === b || a === c || b === c) {
      if (a === b || a === c) {
        console.log(1000 + a * 100);
      } else {
        console.log(1000 + b * 100);
      }
    } else {
      console.log(Math.max(a, b, c) * 100);
    }
  });
