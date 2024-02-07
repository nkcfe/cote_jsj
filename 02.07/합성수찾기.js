const n = 10;

function getDivisors(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function solution(n) {
  return Array.from({ length: n }, (_, idx) => idx + 1).filter(
    (v) => getDivisors(v).length >= 3
  ).length;
}

console.log(solution(n));
