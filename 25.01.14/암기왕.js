const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let index = 0;
const T = Number(input[index++]);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return 1;
    if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return 0;
}

let result = "";

for (let test = 0; test < T; test++) {
  const n = Number(input[index++]);
  const note1 = input[index++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = Number(input[index++]);
  const note2 = input[index++].split(" ").map(Number);

  for (let i = 0; i < m; i++) {
    result += binarySearch(note1, note2[i]) + "\n";
  }
}

console.log(result);
