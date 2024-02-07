const n = 1;

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

function solution(n) {
  let i = 1;
  let factorial = 1;
  while (factorial < n) {
    i++;
    factorial *= i;
    if (factorial > n) return i - 1;
  }

  return i;
}

console.log(solution(n));
