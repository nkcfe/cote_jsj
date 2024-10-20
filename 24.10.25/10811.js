// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));

// const N = input[0][0];
// const M = input[0][1];

// let arr = Array.from({ length: N }, (_, idx) => idx + 1);

// for (let i = 1; i < M + 1; i++) {
//   const start = input[i][0] - 1;
//   const end = input[i][1] - 1;

//   const leftArr = arr.slice(0, start);
//   const rightArr = arr.slice(end + 1, arr.length);

//   const reversedSlice = arr.slice(start, end + 1).reverse();
//   const newArr = leftArr.concat(reversedSlice).concat(rightArr);
//   arr = newArr;
// }

// console.log(arr.join(" "));

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);

let arr = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map((x) => parseInt(x) - 1);
  reverse(arr, start, end);
}

console.log(arr.join(" "));

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
