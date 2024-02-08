const dots = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];

function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
  const width = Math.max(x1, x2, x3, x4) - Math.min(x1, x2, x3, x4);
  const height = Math.max(y1, y2, y3, y4) - Math.min(y1, y2, y3, y4);
  return width * height;
}

console.log(solution(dots));
