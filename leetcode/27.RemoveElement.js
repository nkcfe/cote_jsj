const removeElement = (nums, val) => {
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = "_"
        }
    }
    return nums
}


const nums = [3, 2, 2, 3]
const val = 3

console.log(removeElement(nums, val))
