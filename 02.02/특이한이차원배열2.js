const arr = [
  [19, 498, 258, 587],
  [63, 93, 7, 754],
  [258, 7, 1000, 723],
  [587, 754, 723, 81],
];

function solution(arr) {
  let flag = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        flag = 0;
      }
    }
  }
  return flag;
}

console.log(solution(arr));
