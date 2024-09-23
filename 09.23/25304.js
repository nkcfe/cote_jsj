// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// readline
//   .on("line", function (line) {
//     input.push(line);
//   })
//   .on("close", function () {
//     const totalPrice = parseInt(input[0]);
//     const items = input
//       .slice(2)
//       .map((item) => item.split(" ").map((e) => parseInt(e)))
//       .reduce((acc, cur) => {
//         return (acc += cur[0] * cur[1]);
//       }, 0);

//     console.log(totalPrice === items ? "Yes" : "No");
//   });

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const totalPrice = parseInt(input[0]);
    const items = input.slice(2).reduce((acc, item) => {
      const [price, quantity] = item.split(" ").map(Number);
      return acc + price * quantity;
    }, 0);

    console.log(totalPrice === items ? "Yes" : "No");
  });
