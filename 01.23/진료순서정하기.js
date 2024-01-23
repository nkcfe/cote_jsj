// const emergency = [3, 76, 24];

// const solution = (emergency) => {
//   const sorted_emergency = [...emergency].sort((a, b) => b - a);
//   for (let i = 0; i < emergency.length; i++) {
//     emergency[i] =
//       sorted_emergency.findIndex((num) => num === emergency[i]) + 1;
//   }
//   return emergency;
// };

// console.log(solution(emergency));

const emergency = [3, 76, 24];

const solution = (emergency) => {
  const sorted_emergency = [...emergency].sort((a, b) => b - a);
  return emergency.map((num) => sorted_emergency.indexOf(num) + 1);
};

console.log(solution(emergency));
