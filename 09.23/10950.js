const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line.split(" ").map((e) => parseInt(e)));
  })
  .on("close", function () {
    const T = input[0][0];

    for (let i = 1; i <= T; i++) {
      console.log(input[i][0] + input[i][1]);
    }
    process.exit();
  });
