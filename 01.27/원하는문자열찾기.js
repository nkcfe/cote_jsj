const myString = "AbCdEfG";
const pat = "aBc";

function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

console.log(solution(myString, pat));
