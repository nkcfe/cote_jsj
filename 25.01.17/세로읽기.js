const input = require("fs").readFileSync(0).toString().trim().split("\n");

function solution(input) {
  const maxLength = Math.max(...input.map((line) => line.length));
  let result = "";

  for (let col = 0; col < maxLength; col++) {
    for (let row = 0; row < input.length; row++) {
      if (input[row][col]) {
        result += input[row][col];
      }
    }
  }

  return result;
}

console.log(solution(input));
