const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes
    .map((arr) => arr.sort((a, b) => a - b))
    .forEach((arr, idx) => {
      if (arr[0] > width) {
        width = arr[0];
      }
      if (arr[1] > height) {
        height = arr[1];
      }
    });
  return width * height;
}

console.log(solution(sizes));
