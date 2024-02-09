const polynomial = "x + 0";

function solution(polynomial) {
  const splitPolynomial = polynomial.split(" ");
  let number = splitPolynomial
    .filter((el) => !isNaN(el))
    .map((el) => parseInt(el))
    .reduce((acc, cur) => acc + cur, 0);
  let variable = splitPolynomial
    .filter((el) => el.includes("x"))
    .map((el) => {
      if (el === "x") {
        return 1;
      } else {
        return parseInt(el.replace("x", ""));
      }
    })
    .reduce((acc, cur) => acc + cur, 0);

  const answer = [];

  if (variable) answer.push(variable === 1 ? "x" : `${variable}x`);
  if (number) answer.push(number);

  return answer.join(" + ");
}

console.log(solution(polynomial));
