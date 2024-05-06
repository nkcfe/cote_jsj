const countSmaller = (nums) => {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const next = nums.slice(i + 1);
    const current = nums[i];
    const count = next.filter((v) => v < current).length;
    answer.push(count);
  }
  return answer;
};

const nums = [5, 2, 6, 1];
console.log(countSmaller(nums));
