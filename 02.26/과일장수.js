const k = 7;
const m = 2;
const score = [7, 7, 5, 3, 3, 3, 1];

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  score.forEach((s, i) => {
    if (i % m === 0) {
      const group = score.slice(i, i + m);
      if (group.length === m) {
        answer += Math.min(...group) * m;
      }
    }
  });
  return answer;
}

console.log(solution(k, m, score));
