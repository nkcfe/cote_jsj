const strings = ["sun", "bed", "car"];
const n = 1;

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}

console.log(solution(strings, n));
