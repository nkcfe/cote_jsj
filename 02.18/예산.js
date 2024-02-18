const d = [1, 3, 2, 5, 4];
const budget = 9;

function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget < 0) {
      break;
    }
    count++;
  }
  return count;
}

console.log(solution(d, budget));
