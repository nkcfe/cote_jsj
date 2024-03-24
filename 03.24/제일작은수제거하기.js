const arr = [4, 3, 2, 1];

const solution = (arr) => {
  return arr.length > 1 ? arr.filter((v) => v !== Math.min(...arr)) : [-1];
};

console.log(solution(arr));
