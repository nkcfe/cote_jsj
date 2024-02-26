const answers = [1, 3, 2, 4, 2];

function solution(answers) {
  const answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];
  answers.forEach((a, i) => {
    if (a === p1[i % p1.length]) {
      score[0]++;
    }
    if (a === p2[i % p2.length]) {
      score[1]++;
    }
    if (a === p3[i % p3.length]) {
      score[2]++;
    }
  });
  const max = Math.max(...score);
  score.forEach((s, i) => {
    if (s === max) {
      answer.push(i + 1);
    }
  });
  return answer;
}

console.log(solution(answers));
