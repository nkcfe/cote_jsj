const n = 3;

function solution(n) {
  const sqrt = Math.sqrt(n);
  return sqrt % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

console.log(solution(n));
