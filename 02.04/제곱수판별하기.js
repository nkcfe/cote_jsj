const n = 976;

function solution(n) {
  return Math.sqrt(n).toString().includes(".") ? 2 : 1;
}

console.log(solution(n));
