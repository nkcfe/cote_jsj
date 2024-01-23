const my_string = "jaron";

// const solution = (my_string) => {
//   return my_string.split("").reverse().join("");
// };

// 스프레드 연산자 쓰는게 더 좋아보임
const solution = (my_string) => {
  return [...my_string].reverse().join("");
};

console.log(solution(my_string));
