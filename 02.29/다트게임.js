const dartResult = "1D2S#10S";

function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { "*": 2, "#": -1 };
  const darts = dartResult.match(/\d.?\D/g);
  const answer = [];

  for (let i = 0; i < darts.length; i++) {
    const score = parseInt(darts[i].match(/\d{1,2}/g).join(""));
    const scoreBonus = darts[i].match(/[A-Z]/g).join("");

    Object.keys(bonus).forEach((key) => {
      if (scoreBonus === key) {
        answer.push(Math.pow(score, bonus[key]));
      }
    });

    Object.keys(options).forEach((key) => {
      if (darts[i][2] === key) {
        if (key === "*") {
          answer[i] *= options[key];
          answer[i - 1] *= options[key];
        } else {
          answer[i] *= options[key];
        }
      }
    });
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(dartResult)); // 37
