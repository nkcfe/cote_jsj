//https://school.programmers.co.kr/learn/courses/30/lessons/12925

s1 = "1234";
s2 = "-1234";

function solution(s) {
  return Number(s);
}

// 암시적 형 변환
function strToInt(str) {
  return str / 1;
}

console.log(solution(s2));
