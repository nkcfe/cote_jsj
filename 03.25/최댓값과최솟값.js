const s = "1 2 3 4";

const solution = (s) => {
  const arr = s.split(" ").map((v) => parseInt(v));
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
};

console.log(solution(s));
