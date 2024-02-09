const keyinput = ["right", "right", "right", "right", "right", "left"];
const board = [9, 5];

function solution(keyinput, board) {
  const position = [0, 0];
  const xBoundary = Math.floor(board[0] / 2);
  const yBoundary = Math.floor(board[1] / 2);

  keyinput.forEach((key) => {
    switch (key) {
      case "up":
        if (position[1] < yBoundary) {
          position[1]++;
        }
        break;
      case "down":
        if (position[1] > -yBoundary) {
          position[1]--;
        }
        break;
      case "right":
        if (position[0] < xBoundary) {
          position[0]++;
        }
        break;
      case "left":
        if (position[0] > -xBoundary) {
          position[0]--;
        }
        break;
    }
  });
  return position;
}

console.log(solution(keyinput, board));
