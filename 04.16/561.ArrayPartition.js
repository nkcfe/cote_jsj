const nums = [1, 4, 3, 2]

var solution = function (nums) {
  nums.sort()
  let result = 0
  let pair = []

  for (let i = 0; i < nums.length; i++) {
    pair.push(Number(nums[i]))

    if (i % 2 !== 0) {
      result += Math.min(...pair)

      pair = []
    }
  }

  return result
}

console.log(solution(nums))
