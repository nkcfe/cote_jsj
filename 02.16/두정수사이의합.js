const a = 5;
const b = 3;

function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return Array.from({ length: max - min + 1 }, (_, i) => min + i).reduce(
    (acc, cur) => acc + cur,
    0
  );
}

console.log(solution(a, b));
