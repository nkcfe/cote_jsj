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
    const A = input[0];
    const B = input[1];
    const C = input[2];

    console.log(A + B + C);
    process.exit();
  });
