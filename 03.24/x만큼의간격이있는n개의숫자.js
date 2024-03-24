const x = 2;
const n = 5;

const solution = (x, n) => {
  return Array.from({ length: n }).map((_, idx) => (idx + 1) * x);
};

console.log(solution(x, n));
