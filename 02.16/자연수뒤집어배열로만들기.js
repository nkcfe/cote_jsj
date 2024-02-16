const n = 12345;

function solution(n) {
  return [...n.toString()].reverse().map((v) => parseInt(v));
}

console.log(solution(n));
