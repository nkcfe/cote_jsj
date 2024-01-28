const myString = "aaaa";
const pat = "aa";

function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i < myString.length; i++) {
    const newString = myString.slice(i, myString.length);
    if (newString.startsWith(pat)) {
      count++;
    }
  }
  return count;
}

console.log(solution(myString, pat));
