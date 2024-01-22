//https://school.programmers.co.kr/learn/courses/30/lessons/181906

const my_string = "banana";
const is_prefix = "ban";
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}

console.log(solution(my_string, is_prefix));
