const n = 78

// function solution(n) {
//   let nextNum = n
//   while (true) {
//     nextNum += 1
//     // 조건1. n의 다음 큰 숫자는 n보다 큰 수
//     if (
//       n
//         .toString(2)
//         .split("")
//         .reduce((acc, cur) => (acc += parseInt(cur)), 0) ===
//       nextNum
//         .toString(2)
//         .split("")
//         .reduce((acc, cur) => (acc += parseInt(cur)), 0)
//     ) {
//       return nextNum
//     }
//     // 조건2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 개수가 같다.

//     // 조건3. 조건1과 조건2를 만족하는 가장 작은 수.
//   }
// }

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1)
}

console.log(solution(n))
