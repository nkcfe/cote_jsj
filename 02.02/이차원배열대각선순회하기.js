const board = [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
const k = 2;

function solution(board, k) {
  return board
    .map((arr, i) =>
      arr.filter((num, j) => i + j <= k).reduce((acc, cur) => acc + cur, 0)
    )
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(board, k));
