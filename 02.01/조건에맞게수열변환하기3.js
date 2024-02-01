const arr = [1, 2, 3, 100, 99, 98];
const k = 3;

function solution(arr, k) {
  return k % 2 !== 0 ? arr.map((el) => el * k) : arr.map((el) => el + k);
}

console.log(solution(arr, k));
