const n = 3;

const solution = (n) => {
  return Array.from({ length: n })
    .map((_, i) => (i % 2 === 0 ? "수" : "박"))
    .join("");
};

console.log(solution(n));
