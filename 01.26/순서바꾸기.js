const num_list = [2, 1, 6];
const n = 1;

function solution(num_list, n) {
  const firstAfterArr = num_list.slice(n, num_list.length);
  const secondBeforeArr = num_list.slice(0, n);
  return firstAfterArr.concat(secondBeforeArr);
}

console.log(solution(num_list, n));
