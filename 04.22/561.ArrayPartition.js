const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = 0;
  let pair = [];
  for (let i = 0; i < nums.length; i++) {
    pair.push(nums[i]);
    if (pair.length === 2) {
      result += Math.min(...pair);
      pair = [];
    }
  }
  return result;
};

const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));
