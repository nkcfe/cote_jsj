const num_list = [13, 22, 53, 24, 15, 6];

// function solution(num_list) {
//   let answer = -1;
//   for (let i = 0; i < num_list.length; i++) {
//     if (num_list[i] < 0) {
//       answer = i;
//       break;
//     }
//   }
//   return answer;
// }

const solution = (num_list) => num_list.findIndex((num) => num < 0);

console.log(solution(num_list));
