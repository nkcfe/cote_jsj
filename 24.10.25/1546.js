const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 최대 점수 M


// 시험 본 과목의 개수 N
const N = Number(input[0]);

// 시험 점수 array
const scoreArr = input[1].split(" ").map(Number);

// 최대 점수
const M = Math.max(...scoreArr);

// 새로운 점수 합계
let sum = 0;

for (i = 0; i < N; i++) {
  //점수 = 점수 / M * 100
  sum += (scoreArr[i] / M) * 100;
}

// 새로운 평균값 계산
console.log(sum / N);