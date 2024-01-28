const myString = "ABBAA";
const pat = "AABB";

function solution(myString, pat) {
  const isInclude = [...myString]
    .map((char) => (char === "A" ? "B" : "A"))
    .join("")
    .includes(pat);
  return isInclude ? 1 : 0;
}

console.log(solution(myString, pat));
