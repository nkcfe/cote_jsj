const n = 7;
const t = 15;

// function solution(n, t) {
//   let birus = n;
//   for (let i = 1; i < t + 1; i++) {
//     birus = birus * 2;
//   }
//   return birus;
// }

// 다른사람 풀이
// Math.pow(2, t) 를 사용하여 2의 t승을 구한다.
function solution(n, t) {
  return n * Math.pow(2, t);
}

console.log(solution(n, t));
