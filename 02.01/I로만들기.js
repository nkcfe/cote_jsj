const myString = "abcdevwxyz";

function solution(myString) {
  return [...myString].map((el) => (el <= "l" ? "l" : el)).join("");
}

console.log(solution(myString));
