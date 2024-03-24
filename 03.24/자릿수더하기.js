const N = 123;

const solution = (N) => {
  return [...N.toString()].reduce((acc, cur) => acc + parseInt(cur), 0);
};

console.log(solution(N));
