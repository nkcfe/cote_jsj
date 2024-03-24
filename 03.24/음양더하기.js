const absolutes = [4, 7, 12];
const signs = [true, false, true];

const solution = (absolutes, signs) => {
  return absolutes.reduce(
    (acc, cur, idx) => (signs[idx] ? acc + cur : acc - cur),
    0
  );
};

console.log(solution(absolutes, signs));
