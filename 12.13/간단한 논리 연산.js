arr = [false, true, true, true];

function solution(x1, x2, x3, x4) {
  const first = (a, b) => {
    if (a === false && b === false) {
      return false;
    } else {
      return true;
    }
  };

  const second = (a, b) => {
    if (a === true && b === true) {
      return true;
    } else {
      return false;
    }
  };

  return second(first(x1, x2), first(x3, x4));
}

console.log(solution(arr));

// 논리연산자 피연산자중 하나 이상 참이면 참.
// AND 연산자 피연산자가 모두 참이면 참.
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
