const my_string = "people";

function solution(my_string) {
  const answer = [];
  [...my_string].forEach((char) => {
    if (!answer.includes(char)) {
      answer.push(char);
    }
  });
  return answer.join("");
}

console.log(solution(my_string));
