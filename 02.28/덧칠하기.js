const n = 4;
const m = 1;
const sections = [1, 2, 3, 4];

// function solution(n, m, section) {
//   const wall = {};
//   const arr = Array.from({ length: n }, (_, i) => i + 1);
//   arr.forEach((num) => {
//     if (section.includes(num)) {
//       wall[num] = false;
//       return;
//     }
//     wall[num] = true;
//   });
//   let answer = 0;
//   for (let i = 0; i < n + 1; i++) {
//     if (wall[i] === false) {
//       let count = 0;
//       while (count < m) {
//         wall[i + count] = true;
//         count++;
//       }
//       answer++;
//     }
//   }
//   return answer;
// }

function solution(n, m, sections) {
  let answer = 0;
  let painted = 0;
  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
    return answer;
  }
}

console.log(solution(n, m, sections));
