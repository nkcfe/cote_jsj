const absolutes = [4, 7, 12];

const signs = [true, false, true];

function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => acc + (signs[idx] ? cur : -cur),
    0
  );
}

console.log(solution(absolutes, signs));
