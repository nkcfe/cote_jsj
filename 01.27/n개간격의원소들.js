const num_list = [4, 2, 6, 1, 7, 6];
const n = 4;

function solution(num_list, n) {
  return num_list.filter((num, idx) => idx % n === 0);
}

console.log(solution(num_list, n));
