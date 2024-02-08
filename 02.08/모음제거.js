const my_string = "bus";
const vowels = ["a", "e", "i", "o", "u"];

function solution(my_string) {
  return [...my_string].filter((char) => !vowels.includes(char)).join("");
}

console.log(my_function(my_string));
