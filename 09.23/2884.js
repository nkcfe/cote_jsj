const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
  })
  .on("close", function () {
    const H = input[0];
    const M = input[1];

    if (M >= 45) {
      console.log(H, M - 45);
    } else {
      if (H === 0) {
        console.log(23, M + 15);
      } else {
        console.log(H - 1, M + 15);
      }
    }
  });
