const s = "one0zero0";

function solution(s) {
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let key in dict) {
    const regExp = new RegExp(key, "g");
    s = s.replace(regExp, dict[key]);
  }
  return parseInt(s);
}

console.log(solution(s));
