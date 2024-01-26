const arr = [0, 1, 2, 3, 4, 5];
const query = [4, 1, 2];

function solution(arr, query) {
  let newArr = [...arr];
  query.forEach((num, idx) => {
    if (idx % 2 === 0) {
      newArr = newArr.slice(0, num + 1);
    } else {
      newArr = newArr.slice(num, newArr.length);
    }
  });
  return newArr;
}

console.log(solution(arr, query));
