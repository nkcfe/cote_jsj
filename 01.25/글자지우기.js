const my_string = "apporoograpemmemprs";
const indices = [1, 16, 6, 15, 0, 10, 11, 3];

// function solution(my_string, indices) {
//   const my_stringArray = my_string.split("");

//   for (let i = 0; i < indices.length; i++) {
//     my_stringArray[indices[i]] = 0;
//   }

//   return my_stringArray.filter((char) => char !== 0).join("");
// }

const solution = (my_string, indices) => {
  return [...my_string].filter((num, idx) => !indices.includes(idx)).join("");
};

console.log(solution(my_string, indices));
