const a = 4;
const b = 1;
const c = 4;
const d = 4;

function solution(a, b, c, d) {
  const rand_arr = [a, b, c, d];
  const result = {};

  for (let i = 0; i < 4; i++) {
    if (!result.hasOwnProperty(rand_arr[i])) {
      result[rand_arr[i]] = 0;
    }
    result[rand_arr[i]] += 1;
  }

  const sortable = Object.entries(result)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  if (Object.keys(sortable).length === 1) {
    return Object.keys(sortable)[0] * 1111;
  } else if (Object.keys(sortable).length === 2) {
    return (10 * Object.keys(sortable)[1] + Object.keys(sortable)[0]) ** 2;
  }
}

console.log(solution(a, b, c, d));
