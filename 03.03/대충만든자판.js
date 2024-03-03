const keymap = ["ABCE"];
const targets = ["ABDE"];

const solution = (keymap, targets) => {
  const answer = [];
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    const temp = [];

    [...target].forEach((t) => {
      let idx = 999;
      keymap.forEach((k) => {
        const i = k.indexOf(t);
        if (i !== -1) {
          idx = Math.min(idx, i + 1);
        }
      });

      temp.push(idx);
    });

    if (temp.includes(999)) {
      answer.push(-1);
      continue;
    }

    answer.push(temp.reduce((acc, cur) => acc + cur, 0));
  }

  return answer;
};

console.log(solution(keymap, targets)); // [9,4]
