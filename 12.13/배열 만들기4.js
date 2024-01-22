const arr = [1, 4, 2, 5, 3];

function solution(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk.length !== 0) {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i += 1;
      } else {
        stk.pop();
      }
    }
    
  }
  return stk;
}

console.log(solution(arr));
