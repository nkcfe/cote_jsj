const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => el);
  })
  .on("close", function () {
    const bulgi = input[0] - 543;
    console.log(bulgi);
    process.exit();
  });
