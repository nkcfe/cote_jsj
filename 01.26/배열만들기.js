const arr = [1, 2, 3, 4, 5];
const intervals = [
  [1, 3],
  [0, 4],
];

function solution(arr, intervals) {
  const firstArr = arr.slice(intervals[0][0], intervals[0][1] + 1);
  const secondArr = arr.slice(intervals[1][0], intervals[1][1] + 1);
  const newArr = firstArr.concat(secondArr);
  return newArr;
}

// other solution
function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}


console.log(solution(arr, intervals));
