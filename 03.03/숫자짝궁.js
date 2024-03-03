const X = "100";
const Y = "203045";

// const solution = (X, Y) => {
//   const answer = [];
//   [...X].forEach((x, i) => {
//     if (Y.includes(x)) {
//       answer.push(x);
//       Y = Y.replace(x, "");
//     }
//   });
//   return answer.length === 0
//     ? "-1"
//     : String(BigInt(answer.sort((a, b) => b - a).join("")));
// };

// const solution = (X, Y) => {
//   const answer = [];
//   const freqMap = {};

//   // Y의 문자 빈도수를 저장합니다.
//   for (let y of Y) {
//     freqMap[y] = (freqMap[y] || 0) + 1;
//   }

//   for (let x of X) {
//     // freqMap에서 x의 빈도수를 확인하고, x가 있으면 answer에 추가하고 빈도수를 줄입니다.
//     if (freqMap[x] > 0) {
//       freqMap[x]--;
//       // 문자를 추가할 때마다 정렬 상태를 유지합니다.
//       let i = answer.length;
//       while (i > 0 && answer[i - 1] < x) {
//         answer[i] = answer[i - 1];
//         i--;
//       }
//       answer[i] = x;
//     }
//   }

//   return answer.length === 0 ? "-1" : answer[0] === "0" ? "0" : answer.join("");
// };

const solution = (X, Y) => {
  const freqMap = {};

  // Y의 문자 빈도수를 저장합니다.
  for (let y of Y) {
    freqMap[y] = (freqMap[y] || 0) + 1;
  }

  console.log(freqMap);

  const answer = [...X]
    .filter((x) => {
      if (Y.includes(x)) {
        if (freqMap[x] > 0) {
          freqMap[x]--;
          return true;
        }
      }
    })
    .sort((a, b) => b - a)
    .join("");

  return answer.length === 0 ? "-1" : answer[0] === "0" ? "0" : answer;
};

// const solution = (X, Y) => {

// }

console.log(solution(X, Y));
