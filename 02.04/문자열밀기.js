const A = "abc";
const B = "bca";

function solution(A, B) {
  let count = 0;
  const newArr = A.split("");
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    newArr.unshift(newArr.pop());

    if (newArr.join("") === B) {
      count = i + 1;
      break;
    }
  }
  return count === 0 ? -1 : count;
}

console.log(solution(A, B));
