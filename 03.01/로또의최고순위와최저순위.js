const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = 0;
  let correctCount = 0;

  lottos.forEach((lotto) => {
    if (lotto === 0) {
      zeroCount++;
    } else if (win_nums.includes(lotto)) {
      correctCount++;
    }
  });

  return [rank[correctCount + zeroCount], rank[correctCount]];
}

console.log(solution(lottos, win_nums));
