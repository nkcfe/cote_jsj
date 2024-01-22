const number = "123";

const solution = (number) => {
  return Array.from(number).reduce((acc, cur) => acc + Number(cur), 0) % 9;
};

console.log(solution(number));
