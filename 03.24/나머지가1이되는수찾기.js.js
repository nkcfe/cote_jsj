const n = 10;

const solution = (n) => {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
};

console.log(solution(n));
