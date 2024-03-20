const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let s = fs.readFileSync(filePath).toString().split("\n");

const solution = (s) => {
  const length = s.length;

  const isPalidrom = (s) => {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
      if (s[start++] !== s[end--]) return false;
    }
    return true;
  };

  for (let i = 0; i < length; i++) {
    if (isPalidrom(s.substring(i, length))) {
      return length + i;
    }
  }
};

console.log(solution(s));
