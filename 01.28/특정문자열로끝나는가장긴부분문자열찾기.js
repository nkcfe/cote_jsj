const myString = "AAAAaaaa";
const pat = "a";

function solution(myString, pat) {
  return [...myString]
    .slice(0, myString.lastIndexOf(pat) + pat.length)
    .join("");
}

console.log(solution(myString, pat));
