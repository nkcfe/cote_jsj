const arrA = [7, 8, 10];
const arrB = [10, 7, 8];

const solution = (arrA, arrB) => {
  for (let i = 0; i < arrA.length; i++) {
    const rotationNumber = arrA.pop();
    arrA.unshift(rotationNumber);

    if (JSON.stringify(arrA) === JSON.stringify(arrB)) {
      return true;
    }
  }
  return false;
};

console.log(solution(arrA, arrB)); // true
