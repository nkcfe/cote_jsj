const arr = [1, 8, 3];

function solution(arr) {
  return [Math.max(...arr), arr.indexOf(Math.max(...arr))];
}

console.log(solution(arr));
