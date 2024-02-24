const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
  const stack = [];
  const result = [];
  let index = 0;
  while (index < score.length) {
    stack.push(score[index]);
    stack.sort((a, b) => b - a);

    if (stack.length > k) {
      stack.pop();
    }
    result.push(Math.min(...stack));
    index++;
  }
  return result;
}

console.log(solution(k, score));
