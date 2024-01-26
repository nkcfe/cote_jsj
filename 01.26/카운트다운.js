const start_num = 10;
const end_num = 3;

function solution(start_num, end_num) {
  return [...Array(start_num - end_num + 1)]
    .map((_, idx) => idx + end_num)
    .reverse();
}

console.log(solution(start_num, end_num));
