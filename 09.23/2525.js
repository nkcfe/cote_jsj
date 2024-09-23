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
    const H = input[0];
    const M = input[1];

    const cookTime = input[2];

    if (M + cookTime < 60) {
      console.log(H, M + cookTime);
    } else {
      const overTimeH = Math.floor((M + cookTime) / 60);
      const overTimeM = (M + cookTime) % 60;

      if (H + overTimeH < 24) {
        console.log(H + overTimeH, overTimeM);
      } else {
        console.log(H + overTimeH - 24, overTimeM);
      }
    }
  });
