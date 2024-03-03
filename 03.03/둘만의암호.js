const s = "zzzz";
const skip = "abcd";
const index = 1;

function solution(s, skip, index) {
  const answer = [];
  [...s].forEach((t) => {
    let idx = t.charCodeAt(0) - "a".charCodeAt(0);

    for (let i = 0; i < index; i++) {
      idx++;
      for (let j = 0; j < skip.length; j++) {
        if (skip.includes(String.fromCharCode((idx % 26) + 97))) {
          idx++;
        }
      }
    }

    answer.push(String.fromCharCode((idx % 26) + 97));
  });
  return answer.join("");
}

console.log(solution(s, skip, index));
