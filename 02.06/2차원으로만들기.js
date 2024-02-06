const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 2;

function solution(num_list, n) {
  const answer = [];
  let sum = [];
  for (let i = 0; i < num_list.length; i++) {
    sum.push(num_list[i]);
    if (sum.length === n) {
      answer.push(sum);
      sum = [];
    }
  }

  return answer;
}

function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

console.log(solution(num_list, n));
