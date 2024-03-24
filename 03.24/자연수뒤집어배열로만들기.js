const n = 12345;

const solution = (n) => {
  return [...n.toString()].map((v) => parseInt(v)).reverse();
};

console.log(solution(n));
