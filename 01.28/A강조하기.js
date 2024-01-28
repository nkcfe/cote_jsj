const myString = "abstract algebra";

function solution(myString) {
  return [...myString]
    .map((char) => (char === "a" ? char.toUpperCase() : char))
    .map((char) => (char !== "A" ? char.toLowerCase() : char))
    .join("");
}

console.log(solution(myString));
