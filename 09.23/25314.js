const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = parseInt(line);
  })
  .on("close", function () {
    const count = Math.ceil(input / 4);
    console.log("long ".repeat(count).trim() + " int");
  });
