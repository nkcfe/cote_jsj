const num_list = [12, 4, 15, 1, 14];

// function solution(num_list) {
//   const result = [];
//   for (let i = 0; i < num_list.length; i++) {
//     let count = 0;
//     while (true) {
//       if (num_list[i] === 1) {
//         result.push(count);
//         break;
//       }
//       if (num_list[i] % 2 === 0) {
//         num_list[i] = num_list[i] / 2;

//         count++;
//       } else {
//         num_list[i] = (num_list[i] - 1) / 2;

//         count++;
//       }
//     }
//   }
//   return result.reduce((acc, cur) => acc + cur, 0);
// }

function solution(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);
}

console.log(solution(num_list));
