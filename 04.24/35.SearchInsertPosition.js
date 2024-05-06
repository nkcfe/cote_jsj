const searchInsert = (nums, target) => {
  // 인덱스 찾기
  let index = nums.indexOf(target);

  // 찾지 못할 경우
  if (index === -1) {
    // 벽 세우기
    let left = 0;
    let right = nums.length - 1;

    // 투포인터로 범위 좁히기
    while (left <= right) {
      // 벽과 벽사이 (pointer)
      let mid = Math.floor(left + (right - left) / 2);
      console.log(mid);

      // 타겟 좁혀가기
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        index = mid;
        break;
      }
    }

    // 이진 검색 종료 후 index 얻기
    if (left > right) {
      index = left;
    }
  }
  return index;
};

const nums = [1, 3, 5, 6];
const target = 2;

console.log(searchInsert(nums, target));
