const score = [10, 3, 8, 9, 4];

function solution(score) {
  const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const sortedScore = [...score].sort((a, b) => b - a);

  const rankMap = new Map(
    sortedScore.map((num, index) => [
      num,
      medals[index] ?? (index + 1).toString(),
    ])
  );
  console.log(rankMap);

  return score.map((num) => rankMap.get(num));
}

console.log(solution(score));
