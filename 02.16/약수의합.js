const n = 12;

function solution(n) {
  const answer = [];
  for (let i = 0; i <= n / 2; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  answer.push(n);
  return answer.reduce((acc, cur) => acc + cur);
}

console.log(solution(n));
