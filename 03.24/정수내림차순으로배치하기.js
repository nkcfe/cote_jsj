const n = 118372;

const solution = (n) => {
  return parseInt([...n.toString()].sort((a, b) => b - a).join(""));
};

console.log(solution(n));
