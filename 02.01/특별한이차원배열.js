const n = 3;

function solution(n) {
  const newArr = Array.from({ length: n }, () => Array.from({ length: n }).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        newArr[i][j] = 1;
      }
    }
  }
  return newArr;
}

console.log(solution(n));