const number = 10;
const limit = 3;
const power = 2;

function solution(number, limit, power) {
  const divisorCounts = Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisorCounts[j]++;
    }
  }

  return divisorCounts.reduce(
    (acc, cur) => (cur > limit ? acc + power : acc + cur),
    0
  );
}

console.log(solution(number, limit, power));
