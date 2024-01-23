const age = 23;

const solution = (age) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return String(age)
    .split("")
    .map((num) => alphabet[Number(num)])
    .join("");
};

console.log(solution(age));
