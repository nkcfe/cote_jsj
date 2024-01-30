const arr1 = [49, 13];
const arr2 = [70, 11, 2];

function solution(arr1, arr2) {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
  const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1Length > arr2Length) {
    return 1;
  } else if (arr1Length < arr2Length) {
    return -1;
  } else if (arr1Sum > arr2Sum) {
    return 1;
  } else if (arr1Sum < arr2Sum) {
    return -1;
  } else {
    return 0;
  }
}

console.log(solution(arr1, arr2));
