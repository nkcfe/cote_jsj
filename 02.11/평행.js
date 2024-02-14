const dots = [
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
];

const arr = [
  [1, 2, 3, 4],
  [1, 3, 2, 4],
  [1, 4, 2, 3],
];

function getSlope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}

function solution(dots) {
  let isParallel = false;
  arr.forEach((el) => {
    const [i1, i2, i3, i4] = el;
    const [x1, y1] = dots[i1 - 1];
    const [x2, y2] = dots[i2 - 1];
    const [x3, y3] = dots[i3 - 1];
    const [x4, y4] = dots[i4 - 1];
    const slope1 = getSlope(x1, y1, x2, y2);
    const slope2 = getSlope(x3, y3, x4, y4);
    if (slope1 === slope2) {
      isParallel = true;
    }
  });
  return isParallel ? 1 : 0;
}

console.log(solution(dots));
