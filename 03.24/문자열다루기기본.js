const s = "1234ab";
const isNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) return false;
  }
  return true;
};

function solution(s) {
  const isNum = isNumber(s.split(""));
  return (s.length === 4 && isNum) || (s.length === 6 && isNum) ? true : false;
}

console.log(solution(s));
