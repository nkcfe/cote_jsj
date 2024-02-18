const s = "";
const n = 1;

function solution(s, n) {
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  console.log(alphabetUpper.indexOf(" ") + n) % 26;

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
      continue;
    }
    if (alphabetUpper.includes(s[i])) {
      const idx = (alphabetUpper.indexOf(s[i]) + n) % 26;
      result += alphabetUpper[idx];
    } else {
      const idx = (alphabetLower.indexOf(s[i]) + n) % 26;
      result += alphabetLower[idx];
    }
  }
  return result;
}

console.log(solution(s, n));
