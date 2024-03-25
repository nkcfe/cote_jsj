const s = "3people unFollowed me";

const solution = (s) => {
  return (arr = s
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(" "));
};

console.log(solution(s));
