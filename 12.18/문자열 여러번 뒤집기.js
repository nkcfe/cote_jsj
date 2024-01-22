const my_string = "rermgorpsam";
const queries = [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
];

function solution(my_string, queries) {
  queries.forEach((element) => {
    const splitArr = [...my_string];
    const [from, to] = element;
    const sliceText = splitArr.slice(from, to + 1);
    const reversed = sliceText.reverse().join("");
    splitArr.splice(from, to - from + 1, reversed);
    my_string = splitArr.join("");
  });
  return my_string
}

console.log(solution(my_string, queries));
