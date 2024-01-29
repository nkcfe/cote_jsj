const arr = [0, 1, 1, 0];

function solution(arr) {
  let i = 0;
  const stk = [];
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0 && stk[stk.length - 1] === arr[i]) {
      stk.pop();
      i++;
    } else {
      stk.push(arr[i]);
      i++;
    }
    
  }
  return stk.length > 0 ? stk : [-1];
}

console.log(solution(arr));
