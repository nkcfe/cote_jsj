const romanToInt = (s) => {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let idx = 0;
  const answer = [];
  while (idx < s.length) {
    if (symbol[s[idx]] < symbol[s[idx + 1]]) {
      answer.push(symbol[s[idx + 1]] - symbol[s[idx]]);
      idx += 2;
      continue;
    }
    answer.push(symbol[s[idx]]);
    idx++;
  }
  return answer.reduce((acc, cur) => (acc += cur), 0);
};

const s = "MCMXCIV";
console.log(romanToInt(s));
