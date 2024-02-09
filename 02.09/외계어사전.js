const spell = ["s", "o", "m", "d"];
const dic = ["moos", "dzx", "smm", "sunmmo", "som"];

function solution(spell, dic) {
  const answer = [];
  dic.forEach((el) => {
    if (el.length < spell.length) return;
    let flag = [];
    spell.forEach((char) => {
      if (el.includes(char)) {
        flag.push(true);
      }
    });
    if (flag.length === el.length) answer.push(el);
  });

  return answer.length === 0 ? 2 : 1;
}

console.log(solution(spell, dic));
