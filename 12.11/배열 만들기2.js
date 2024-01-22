function solution(l, r) {
  const result = [];
  for (let i = l; i <= r; i++) {
    if (i % 5 !== 0) continue;
    const charI = String(i);
    if (![...charI].every((a) => a === "5" || a === "0")) continue;
    result.push(i);
  }
  return result.length ? result : [-1];
}

function* gen50() {
  let i = 1;

  while (true) {
    yield Number(Number(i).toString(2)) * 5;
    i++;
  }
}
function solution(l, r) {
  const n = gen50();
  let a = 0;
  const arr = [];

  while (a < l) {
    a = n.next().value;
  }
  while (a <= r) {
    arr.push(a);
    a = n.next().value;
  }

  return arr.length ? arr : [-1];
}
console.log(gen50);
// console.log(solution(5, 555));
