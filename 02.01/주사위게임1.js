const a = 3;
const b = 5;

function solution(a, b) {
  if (a % 2 !== 0 && b % 2 !== 0) {
    return a ** 2 + b ** 2;
  } else if (a % 2 !== 0 || b % 2 !== 0) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}

console.log(solution(a, b));
