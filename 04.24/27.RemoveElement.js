const removeElement = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
    } else {
      count++;
    }
  }
  nums.sort();
  return count;
};

const nums = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(nums));
