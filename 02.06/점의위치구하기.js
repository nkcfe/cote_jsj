const dot = [2, 4];

function solution(dot) {
  const [x, y] = dot;
  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else return 4;
}

console.log(solution(dot));
