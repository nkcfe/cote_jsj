const str_list = ["abc", "def", "ghi"];
const ex = "ef";

function solution(str_list, ex) {
  return str_list.filter((str) => !str.includes(ex)).join("");
}

console.log(solution(str_list, ex)); // ["abc", "ghi"]
