const a = 3;
const b = 5;

// 굳이 배열 생성하지 않아도 됨. 속도 향상
const solution = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let result = 0;

  for (let i = 0; i < max - min + 1; i++) {
    result += min + i;
  }
  return result;
};

const solution2 = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return Array.from({ length: max - min + 1 }, (_, i) => min + i).reduce(
    (acc, cur) => acc + cur,
    0
  );
};

console.log(solution(a, b));
