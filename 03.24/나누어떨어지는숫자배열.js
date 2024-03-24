const arr = [5, 9, 7, 10];
const divisor = 5;

const solution = (arr, divisor) => {
  const filterArr = arr.filter((v) => v % divisor === 0);
  return filterArr.length === 0 ? [-1] : filterArr.sort((a, b) => a - b);
};

console.log(solution(arr, divisor));
