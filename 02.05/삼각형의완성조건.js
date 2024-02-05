const side = [199, 72, 222];

function solution(side) {
  const max = Math.max(...side);
  const sum = side.reduce((acc, cur) => acc + cur, 0) - max;
  return max < sum ? 1 : 2;
}

console.log(solution(side));
