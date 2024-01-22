const my_string = "banana";

function solution(my_string) {
  const answer = [];
  for (let i = 0; i < my_string.length; i++) {
    const prefix = my_string.split("").splice(i, my_string.length).join("");
    answer.push(prefix);
  }
  return answer.sort();
}

console.log(solution(my_string));
