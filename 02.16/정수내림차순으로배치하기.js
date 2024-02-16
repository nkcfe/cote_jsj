const n = 118372;

function solution(n) {
  return parseInt([...n.toString()].sort().reverse().join(""));
}

console.log(solution(n));
