const rank = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];

function solution(rank, attendance) {
  const [first, second, third] = rank
    .filter((_, i) => attendance[i])
    .sort((a, b) => a - b)
    .slice(0, 3);
  const a = rank.indexOf(first);
  const b = rank.indexOf(second);
  const c = rank.indexOf(third);
  return 10000 * a + 100 * b + c;
}

console.log(solution(rank, attendance));
