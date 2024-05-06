// 투포인터 탐색 124ms
const isPalidrome = (x) => {
  const stringX = x.toString();
  let left = 0;
  let right = stringX.length - 1;

  while (left < right) {
    if (stringX[left] !== stringX[right]) return false;
    left++;
    right--;
  }
  return true;
};

// 메소드 활용 134ms
const isPalidrome2 = (x) => {
  return x === Number(x.toString().split("").reverse().join(""));
};

const x = 121;
console.log(isPalidrome(x));
