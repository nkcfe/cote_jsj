const n = 10;
const k = 3;

function solution(n, k) {
  const nArray = [...Array(n)].map((_, idx) => idx + 1);
  return nArray.filter((num) => num % k === 0);
}

console.log(solution(n, k));
