const arr = [1, 0, 0, 1, 0, 0];
const idx = 4;

function solution(arr, idx) {
  const findOne = arr.slice(idx, arr.length).findIndex((v) => v == 1);

  return findOne === -1 ? findOne : findOne + idx;
}

console.log(solution(arr, idx));

// other's solution
function solution(arr, idx) {
  return arr.findIndex((v, i) => idx <= i && v === 1);
}