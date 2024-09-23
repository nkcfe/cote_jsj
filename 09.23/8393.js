// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// readline
//   .on("line", function (line) {
//     input = parseInt(line);
//   })
//   .on("close", function () {
//     let answer = 0;
//     for (let i = 1; i <= input; i++) {
//       answer += i;
//     }
//     console.log(answer);
//     process.exit();
//   });

// 수학공식을 이용한 풀이
// n * (n + 1) / 2
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// readline
//   .on("line", function (line) {
//     input = parseInt(line);
//   })
//   .on("close", function () {
//     let n = input;
//     let answer = (n * (n + 1)) / 2; // 수학 공식을 사용하여 합을 계산
//     console.log(answer);
//     process.exit();
//   });

// Array.from, reduce를 이용한 풀이
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
    const numbers = Array.from({ length: input }, (_, i) => i + 1);
    const answer = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(answer);
    process.exit();
  });