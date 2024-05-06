const removeDuplicates = (nums) => {
  let start = nums[0];

  const expectedNums = nums.filter((_, idx) => {
    if (nums[idx] < start) {
      return false;
    } else {
      start++;
      return true;
    }
  });
  nums = expectedNums;
  const k = expectedNums;
  return k;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
