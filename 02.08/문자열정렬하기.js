const my_string = "hi12392";

function solution(my_string) {
  return [...my_string]
    .filter((char) => !isNaN(char))
    .map((char) => parseInt(char))
    .sort();
}

console.log(solution(my_string));
