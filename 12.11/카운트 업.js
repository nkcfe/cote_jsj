const start_num = 3;
const end_num = 10;

function solution(start_num, end_num) {
  return Array.from({ length: end_num - start_num + 1 }).map(
    (val, idx) => idx + start_num
  );
}

console.log(solution(start_num, end_num));


function solution(start, end) {
    idx = start;
    return Array.from({length: end-start+1}, ()=> {return start++});
}