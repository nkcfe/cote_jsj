const s = "pPoooyY";

const solution = (s) => {
  let countP = 0;
  let countY = 0;
  [...s.toLowerCase()].forEach((v) =>
    v === "p" ? countP++ : v === "y" ? countY++ : null
  );
  return countP === countY ? true : false;
};

console.log(solution(s));
