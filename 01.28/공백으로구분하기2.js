const my_string = " i    love  you";

function solution(my_string) {
  return my_string.split(" ").filter((word) => word !== "")
}

console.log(solution(my_string));
