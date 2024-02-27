const nums = [1, 2, 3, 4];

function getCombination(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  const combinations = getCombination(nums, 3);
  return combinations
    .map((combination) => combination.reduce((acc, cur) => acc + cur), 0)
    .filter(isPrime).length;
}

console.log(solution(nums));
