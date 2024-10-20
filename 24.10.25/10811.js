let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const N = input[0][0];
const M = input[0][1];

let arr = Array.from({ length: N }, (_, idx) => idx + 1);

for (let i = 1; i < M + 1; i++) {
  const start = input[i][0] - 1;
  const end = input[i][1] - 1;

  const leftArr = arr.slice(0, start);
  const rightArr = arr.slice(end + 1, arr.length);

  const reversedSlice = arr.slice(start, end + 1).reverse();
  const newArr = leftArr.concat(reversedSlice).concat(rightArr);
  arr = newArr;
}

console.log(arr.join(" "));
