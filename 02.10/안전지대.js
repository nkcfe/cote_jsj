const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

function solution(board) {
  const dx = [0, 0, 1, -1, -1, -1, 1, 1];
  const dy = [1, -1, 0, 0, -1, 1, -1, 1];
  const row = board.length;
  const col = board[0].length;

  let count = row * col;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 1) {
        count -= 1;
        continue;
      }
      let queue = [];
      queue.push([i, j]);
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        let isSafe = true;
        for (let k = 0; k < 8; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
            if (board[nx][ny] === 1) {
              isSafe = false;
            }
          }
        }
        if (!isSafe) {
          count -= 1;
        }
      }
    }
  }
  return count;
}

console.log(solution(board));
