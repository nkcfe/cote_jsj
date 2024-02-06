const n = 100;

function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer.length;
}

console.log(solution(n));
