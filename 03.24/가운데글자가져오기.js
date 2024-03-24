const s = "qwer";

const solution = (s) => {
  const center = s.length / 2;
  return s.length % 2 !== 0
    ? s[Math.floor(center)]
    : s.slice(Math.floor(center) - 1, Math.ceil(center) + 1);
};

console.log(solution(s));
