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
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    const plus = A + B;
    const minus = A - B;
    const multiply = A * B;
    const divide = Math.floor(A / B);
    const remainder = A % B;
    console.log(plus);
    console.log(minus);
    console.log(multiply);
    console.log(divide);
    console.log(remainder);
    process.exit();
  });
