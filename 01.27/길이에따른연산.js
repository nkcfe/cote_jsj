const num_list = [2, 3, 4, 5];

function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((acc, cur) => acc + cur, 0)
    : num_list.reduce((acc, cur) => acc * cur, 1);
}

console.log(solution(num_list));
