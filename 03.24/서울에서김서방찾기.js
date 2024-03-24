const seoul = ["Jane", "Kim"];

const solution = (seoul) => {
  const idx = seoul.indexOf("Kim");
  return `김서방은 ${idx}에 있다`;
};

console.log(solution(seoul));
