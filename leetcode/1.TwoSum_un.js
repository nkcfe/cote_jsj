const nums = [3, 2, 4];
const target = 6;

const twoSum = (nums, target) => {
  const numDict = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in numDict) {
      return [numDict[complement], i];
    }

    numDict[nums[i]] = i;
  }
};

console.log(twoSum(nums, target));
