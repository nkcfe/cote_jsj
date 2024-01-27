const arr = [0, 1, 2, 3, 4];
const queries = [
  [0, 1],
  [1, 2],
  [2, 3],
];

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    arr = [...arr].map((num, idx) =>
      idx >= start && idx <= end ? num + 1 : num
    );
  }
  return arr;
}

function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) arr[s++]++;
  });
  return arr;
}

console.log(solution(arr, queries));
