const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(parseInt(line));
  })
  .on("close", function () {
    const ONE = input[0];
    const TWO = input[1];

    const THREE = ONE * (TWO % 10);
    const FOUR = ONE * Math.floor((TWO % 100) / 10);
    const FIVE = ONE * Math.floor(TWO / 100);
    const SIX = ONE * TWO;

    console.log(THREE);
    console.log(FOUR);
    console.log(FIVE);
    console.log(SIX);
    process.exit();
  });
