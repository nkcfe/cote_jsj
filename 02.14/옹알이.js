const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
const word = ["aya", "ye", "woo", "ma"];

function getPermutations(arr, number) {
  const results = [];
  if (number === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, number - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });
  return results;
}

const word2 = getPermutations(word, 2);
const word3 = getPermutations(word, 3);
const word4 = getPermutations(word, 4);

function solution(babbling) {
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (babbling[i] === word[j]) {
        count += 1;
      }
    }
    for (let j = 0; j < word2.length; j++) {
      if (babbling[i] === word2[j].join("")) {
        count += 1;
      }
    }
    for (let j = 0; j < word3.length; j++) {
      if (babbling[i] === word3[j].join("")) {
        count += 1;
      }
    }
    for (let j = 0; j < word4.length; j++) {
      if (babbling[i] === word4[j].join("")) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(solution(babbling));
