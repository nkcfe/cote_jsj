const number = [-2, 3, 0, 2, -5];

function getCombinations(arr, num) {
  const results = [];
  if (num === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

function solution(number) {
  const combi = getCombinations(number, 3);
  return combi
    .map((arr) => arr.reduce((acc, cur) => acc + cur, 0))
    .filter((num) => num === 0).length;
}

console.log(solution(number));
