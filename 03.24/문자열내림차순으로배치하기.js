const s = "Zbcdefg";

const solution = (s) => {
  return [...s].sort().reverse().join("");
};

console.log(solution(s));
