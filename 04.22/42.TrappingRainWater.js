// const trap = (height) => {
//   const max_num_idx = Math.max(...height);
//   let count = 0;
//   let cur = 0;

//   for (let i = 0; i < height.indexOf(max_num_idx); i++) {
//     if (height[i] > cur) {
//       cur = height[i];
//     } else if (height[i] < cur) {
//       count += cur - height[i];
//     }
//   }
//   cur = 0;

//   for (let i = height.length - 1; i > height.indexOf(max_num_idx); i--) {
//     if (height[i] > cur) {
//       cur = height[i];
//     } else if (height[i] < cur) {
//       count += cur - height[i];
//     }
//   }
//   return count;
// };

const trap = (height) => {
  let left = 0,
    right = height.length - 1;
  let maxLeft = 0,
    maxRight = 0;
  let count = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        count += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        count += maxRight - height[right];
      }
      right--;
    }
  }
  return count;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
