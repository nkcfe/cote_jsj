const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = input[0];
const question = input.slice(1);

const map = {
  STRAWBERRY: 0,
  BANANA: 0,
  LIME: 0,
  PLUM: 0,
};

for (let i = 0; i < n; i++) {
  const [fruits, count] = question[i].split(" ");
  map[fruits] += Number(count);
}

const answer = Object.values(map).find((num) => num === 5);
if (answer) console.log("YES");
else console.log("NO");
