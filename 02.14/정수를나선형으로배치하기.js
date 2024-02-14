const n = 4;

function solution(n) {
  // 1. n x n 배열을 만든다.
  let result = Array.from({ length: n }, () => Array(n).fill(0));

  // 2. 1부터 n까지의 숫자를 배열에 넣는다.
  let x = 0;
  let y = 0;
  let num = 1;
  while (num <= n * n) {
    // 3. 오른쪽으로 이동하면서 숫자를 넣는다.
    while (y < n && result[x][y] === 0) {
      result[x][y] = num;
      num += 1;
      y += 1;
    }
    y -= 1;
    x += 1;

    // 4. 아래로 이동하면서 숫자를 넣는다.
    while (x < n && result[x][y] === 0) {
      result[x][y] = num;
      num += 1;
      x += 1;
    }
    x -= 1;
    y -= 1;

    // 5. 왼쪽으로 이동하면서 숫자를 넣는다.
    while (y >= 0 && result[x][y] === 0) {
      result[x][y] = num;
      num += 1;
      y -= 1;
    }
    y += 1;
    x -= 1;

    // 6. 위로 이동하면서 숫자를 넣는다.
    while (x >= 0 && result[x][y] === 0) {
      result[x][y] = num;
      num += 1;
      x -= 1;
    }
    x += 1;
    y += 1;
  }

  return result;
}

console.log(solution(n));
