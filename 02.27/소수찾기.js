const n = 10;

function solution(n) {
  const primeArr = Array.from({ length: n + 1 }, () => true);
  primeArr[0] = primeArr[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeArr[j] = false;
      }
    }
  }
  return primeArr.filter((num) => num === true).length;
}

console.log(solution(n));
