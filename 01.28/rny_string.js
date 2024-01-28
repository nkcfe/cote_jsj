const rny_string = "programmers";

function solution(rny_string) {
  return [...rny_string].map((char) => char.replace("m", "rn")).join("");
}

console.log(solution(rny_string));
