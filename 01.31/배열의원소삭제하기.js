const arr = [293, 1000, 395, 678, 94];
const delete_list = [94, 777, 104, 1000, 1, 12];

function solution(arr, delete_list) {
  return arr.filter((num) => !delete_list.includes(num));
}

console.log(solution(arr, delete_list));
