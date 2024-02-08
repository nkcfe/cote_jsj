const my_string = "aAb1B2cC34oOp";

function solution(my_string) {
  return [...my_string]
    .filter((char) => !isNaN(char))
    .reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution(my_string));
