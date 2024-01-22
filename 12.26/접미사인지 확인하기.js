//https://school.programmers.co.kr/learn/courses/30/lessons/181908

const my_string = "banana";
const is_suffix = "ana";

// function solution(my_string, is_suffix) {
//   const result = [];
//   for (let i = 0; i < my_string.length - 1; i++) {
//     result.push(my_string.slice(i + 1, my_string.length));
//   }
//   console.log(result);
//   return result.includes(is_suffix) ? 1 : 0;
// }

// console.log(solution(my_string, is_suffix));

function solution(my_string, is_suffix) {
  return +my_string.endsWith(is_suffix);
}
console.log(solution(my_string, is_suffix));
