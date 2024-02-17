const arr = [4, 3, 2, 1];

function solution(arr) {
  return arr.length === 1
    ? [-1]
    : arr.filter((num) => num !== Math.min(...arr));
}

console.log(solution(arr));
