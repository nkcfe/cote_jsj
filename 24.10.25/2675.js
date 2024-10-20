// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const T = Number(input[0]);

// const ans = [];
// for (let i = 0; i < T; i++) {
//   const [count, word] = input[i + 1].split(" ");

//   let answer = "";
//   for (let j = 0; j < word.length; j++) {
//     const cur = word[j];
//     const newWord = cur.repeat(count);
//     answer += newWord;
//   }
//   ans.push(answer);
// }

// ans.forEach((line) => console.log(line));


const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

const results = input.slice(1, T + 1).map(line => {
  const [count, word] = line.split(" ");
  return Array.from(word).reduce((acc, char) => 
    acc + char.repeat(Number(count)), 
  "");
});

console.log(results.join("\n"));