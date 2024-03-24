const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

const solution = (a, b) => {
  return Array.from({ length: a.length }).reduce(
    (acc, _, i) => acc + a[i] * b[i],
    0
  );
};

console.log(solution(a, b));
