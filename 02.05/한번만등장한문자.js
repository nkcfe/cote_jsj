const s = "abcabcadc";

function solution(s) {
  const answer = {};
  for (let i = 0; i < s.length; i++) {
    if (answer[s[i]]) {
      answer[s[i]]++;
    } else {
      answer[s[i]] = 1;
    }
  }
  return Object.keys(answer)
    .filter((key) => answer[key] === 1)
    .sort()
    .join("");
}

console.log(solution(s));
