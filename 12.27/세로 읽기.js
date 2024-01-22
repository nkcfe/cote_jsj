//https://school.programmers.co.kr/learn/courses/30/lessons/181904

const my_string = "ihrhbakrfpndopljhygc";
const m = 4;
const c = 2;

function solution(my_string, m, c) {
  const arr = [...my_string];
  const count = my_string.length;
  const result = [];
  let start = 0;
  while (start < count) {
    result.push(arr.slice(start, m + start)[c - 1]);
    start += m;
  }
  return result.join("");
}

console.log(solution(my_string, m, c));

function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
