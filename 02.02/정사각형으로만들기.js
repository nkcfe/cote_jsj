const arr = [
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
];

function solution(arr) {
  if (arr[0].length > arr.length) {
    while (arr[0].length !== arr.length) {
      arr.push(Array.from({ length: arr[0].length }).fill(0));
    }
  } else {
    while (arr[0].length !== arr.length) {
      arr.forEach((el) => el.push(0));
    }
  }
  return arr;
}

console.log(solution(arr));
