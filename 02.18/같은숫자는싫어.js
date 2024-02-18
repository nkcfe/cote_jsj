const arr = [1, 1, 1, 3, 3, 0, 1, 1];

// function solution(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

function solution(arr) {
  return arr.filter((num, idx) => num !== arr[idx + 1]);
}

console.log(solution(arr));
