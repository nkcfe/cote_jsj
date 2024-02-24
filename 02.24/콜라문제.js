const a = 3;
const b = 1;
const n = 20;

function solution(a, b, n) {
  let recycle = 0;
  let rest = 0;
  let result = 0;

  while (true) {
    recycle = Math.floor(n / a) * b;
    rest = n % a;
    result += recycle;
    n = recycle + rest;

    if (n < a) {
      break;
    }
  }
  return result;
}

console.log(solution(a, b, n));
