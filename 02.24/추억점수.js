const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

function solution(name, yearning, photo) {
  return photo.map((p) =>
    p.reduce((acc, cur) => acc += yearning[name.indexOf(cur)] ?? 0, 0)
  );
}

// function solution(name, yearning, photo) {
//   const dict = {};
//   let count = [];
//   for (let i = 0; i < name.length; i++) {
//     dict[name[i]] = yearning[i];
//   }
//   for (let i = 0; i < photo.length; i++) {
//     let temp = 0;
//     for (let j = 0; j < photo[i].length; j++) {
//       if (dict[photo[i][j]]) {
//         temp += dict[photo[i][j]];
//       }
//     }
//     count.push(temp);
//   }
//   return count;
// }

console.log(solution(name, yearning, photo));
