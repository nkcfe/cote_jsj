n = 10;
function solution(n) {
  let x = n;
  let result = [x];
  while (x !== 1) {
    if (x % 2 === 0) {
      x = x / 2;
      result.push(x);
    } else {
      x = 3 * x + 1;
      result.push(x);
    }
  }
  return result;
}

console.log(solution(n));

function solution(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}
