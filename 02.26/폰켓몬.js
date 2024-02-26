const nums = [3, 3, 3, 2, 2, 4];

function solution(nums) {
  const set = new Set(nums);
  return Math.min(set.size, nums.length / 2);
}

console.log(solution(nums));
