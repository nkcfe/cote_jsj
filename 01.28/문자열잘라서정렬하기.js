const myString = "dxccxbbbxaaaa";

function solution(myString) {
  return myString
    .split("x")
    .filter((char) => char !== "")
    .sort((a, b) => (a < b ? -1 : 1));
}

console.log(solution(myString));
