const picture = [
  ".xx...xx.",
  "x..x.x..x",
  "x...x...x",
  ".x.....x.",
  "..x...x..",
  "...x.x...",
  "....x....",
];
const k = 2;

function solution(picture, k) {
  const newArr = [];
  picture
    .map((row) => [...row].map((el) => el.repeat(k)).join(""))
    .forEach((row) => {
      for (let i = 0; i < k; i++) {
        newArr.push(row);
      }
    });
  return newArr;
}

console.log(solution(picture, k));
