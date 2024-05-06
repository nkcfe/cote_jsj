const threeSum = (nums) => {
  const results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        results.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right++;
        }

        left++, right--;
      }
    }
  }
  return results;
};

const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];

console.log(threeSum(nums));
