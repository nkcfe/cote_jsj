const n = 3;
const m = 12;

// 최대공약수
// 두 수의 공통된 약수 중에서 가장 큰 수
// 2부터 작은 수까지 모든 수로 나누어보고, 나누어 떨어지는 수 중에서 가장 큰 수
function getGCD(num1, num2) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

// 최소공배수
// 두 수의 공통된 배수 중에서 가장 작은 수
// 두 수의 곱을 최대공약수로 나누면 최소공배수
function getLCM(num1, num2) {
  return (num1 * num2) / getGCD(num1, num2);
}

function solution(n, m) {
  return [getGCD(n, m), getLCM(n, m)];
}

console.log(solution(n, m));
