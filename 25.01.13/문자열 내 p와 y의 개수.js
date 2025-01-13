const s = "pPoooyY";

function solution(s) {
  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === "p") {
      p++;
    } else if (s[i].toLowerCase() === "y") {
      y++;
    }
  }

  return p === y ? true : false;
}

function solution2(s) {
  const reduce = [...s].reduce(
    (acc, cur) => {
      const currentLower = cur.toLowerCase();
      if (currentLower === "p") {
        acc.p++;
      } else if (currentLower === "y") {
        acc.y++;
      }
      return acc;
    },
    { p: 0, y: 0 }
  );

  return reduce.p === reduce.y ? true : false;
}

console.log(solution2(s));
