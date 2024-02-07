const score = [
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
];

function solution(score) {
  const averageScore = score.map((el) => (el[0] + el[1]) / 2);
  const sortedArr = [...averageScore].sort((a, b) => b - a);
  const rankArr = averageScore.map((el) => sortedArr.indexOf(el) + 1);
  return rankArr;
}

console.log(solution(score));
