//https://school.programmers.co.kr/learn/courses/30/lessons/181905

const my_string = "Progra21Sremm3";
const s = 6;
const e = 12;

function solution(my_string, s, e) {
  const arr = my_string.split("");

  const reverse = my_string
    .split("")
    .slice(s, e + 1)
    .reverse()
    .join("");

  arr.splice(
    s,
    e - s + 1,
    my_string
      .split("")
      .slice(s, e + 1)
      .reverse()
      .join("")
  );
  return arr.join("");
}

console.log(solution(my_string, s, e));
