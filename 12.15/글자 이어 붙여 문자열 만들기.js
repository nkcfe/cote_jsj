const my_string = "cvsgiorszzzmrpaqpe";
const index_lit = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];

function solution(my_string, index_list) {
  return index_list.map((val) => my_string[val]).join("");
}

console.log(solution(my_string, index_lit));
