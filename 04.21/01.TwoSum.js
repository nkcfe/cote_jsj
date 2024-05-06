const nums = [3, 2, 4];
const target = 6;

const twoSum = (nums, target) => {
  // 숫자 색인 객체 생성
  const num_indices = {};
  // nums 길이만큼 반복한다.
  for (let i = 0; i < nums.length; i++) {
    // 타겟과 뺀 값 (즉, 보충해야하는 값)
    let complement = target - nums[i];
    // 객체에 보충값이 있을 경우 정답 반환
    if (complement in num_indices) {
      return [num_indices[complement], i];
    }
    // 없을경우 객체에 추가.
    num_indices[nums[i]] = i;
  }
};

console.log(twoSum(nums, target));
