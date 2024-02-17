const arr = [2, 36, 1, 3];
const divisor = 1;

function solution(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
  return result.length === 0 ? [-1] : result;
}

console.log(solution(arr, divisor));
