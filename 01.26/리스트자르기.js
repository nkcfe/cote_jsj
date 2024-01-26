const n = 3;
const slicer = [1, 5, 2];
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(n, slicer, num_list) {
  const a = slicer[0];
  const b = slicer[1];
  const c = slicer[2];
  if (n === 1) {
    return num_list.slice(0, b + 1);
  } else if (n === 2) {
    return num_list.slice(a, num_list.length + 1);
  } else if (n === 3) {
    return num_list.slice(a, b + 1);
  } else if (n === 4) {
    return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
  }
}

console.log(solution(n, slicer, num_list));

// other's solution
function solution(n, slicer, num_list) {
  let [a, b, c] = [...slicer];

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}
