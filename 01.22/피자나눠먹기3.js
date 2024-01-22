const slice = 4;
n = 12;

const solution = (slice, n) => {
  return Math.ceil(n / slice);
};

console.log(solution(slice, n));
