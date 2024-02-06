const balls = 30;
const share = 29;

// function solution(balls, share) {
//   const denominator = Array.from({ length: balls }, (_, i) => i + 1)
//     .reverse()
//     .splice(0, share)
//     .reduce((acc, cur) => acc * cur, 1);
//   const nemerator = Array.from({ length: balls }, (_, i) => i + 1)
//     .splice(0, share)
//     .reduce((acc, cur) => acc * cur, 1);
//   return Math.round(denominator / nemerator);
// }

// factorial 함수 생성 후 재귀함수로 팩토리얼 구현
// const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

// function solution(balls, share) {
//   return Math.round(
//     팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
//   );
// }

// console.log(solution(balls, share));
const sum = 0.1 + 0.2;
console.log(Math.round(sum * 10) / 10);
