const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", function (line) {
    input = parseInt(line);
  })
  .on("close", function () {
    if (input % 4 === 0 && input % 100 !== 0) {
      console.log(1);
    } else if (input % 400 === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
    process.exit();
  });
  