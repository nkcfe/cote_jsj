function romanToInt(s) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return arr;
  // for (let i = 0; i < s.length; i++) {
  //   if (symbol[s[i]] < symbol[s[i + 1]]) {
  //     arr.push(symbol[s[i + 1]] - symbol[s[i]]);

  //     i++;
  //     continue;
  //   }
  //   arr.push(symbol[s[i]]);
  // }

  // return arr.reduce((acc, cur) => acc + cur, 0);
}

const s = "III";

console.log(romanToInt(s));
