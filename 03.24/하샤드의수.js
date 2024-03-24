const x = 13;

const solution = (x) => {
  const sum = [...x.toString()].reduce((acc, cur) => acc + parseInt(cur), 0);
  return x % sum === 0 ? true : false;
};

console.log(solution(x));
