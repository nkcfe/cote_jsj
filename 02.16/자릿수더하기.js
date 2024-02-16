const N = 123;

function solution(N) {
  return [...N.toString()].reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution(N));
