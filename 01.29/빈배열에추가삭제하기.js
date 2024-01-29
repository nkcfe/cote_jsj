const arr = [3, 2, 4, 1, 3];
const flag = [true, false, true, false, false];

function solution(arr, flag) {
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i] === true) {
      for (let j = 0; j < arr[i] * 2; j++) {
        x.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        x.pop();
      }
    }
  }
  return x;
}

console.log(solution(arr, flag));
