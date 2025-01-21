const input = require("fs").readFileSync(0).toString().trim().split("\n");

const MOD = 1234567891;
const l = input[0];
const question = input[1].split("");
const chatCodeQuestion = question.map((char) => char.charCodeAt() - 96);

let answer = 0;

for (let i = 0; i < l; i++) {
  const number = chatCodeQuestion[i];
  const m = Math.pow(31, i) % MOD;
  answer += number * m;
}

console.log(answer);


// const input = require("fs").readFileSync(0).toString().trim().split("\n");

// const MOD = 1234567891;
// const l = Number(input[0]);
// const question = input[1].split("");
// const chatCodeQuestion = question.map((char) => char.charCodeAt() - 96);

// let answer = 0;
// let power = 1; // 31의 거듭제곱 값을 저장할 변수

// for (let i = 0; i < l; i++) {
//   // 각 연산마다 모듈러 연산 적용
//   answer = (answer + ((chatCodeQuestion[i] * power) % MOD)) % MOD;
//   // 다음 거듭제곱 계산 (31 * power) % MOD
//   power = (power * 31) % MOD;
// }

// console.log(answer);
