const num_list = [5, 2, 1, 7, 5];
const n = 2;

function solution(num_list, n) {
  return num_list.slice(n - 1, num_list.length);
}

console.log(solution(num_list, n));
