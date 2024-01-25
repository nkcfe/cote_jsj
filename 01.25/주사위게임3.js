const a = 2;
const b = 5;
const c = 1;
const d = 6;

function solution(a, b, c, d) {
  const object = {};

  [a, b, c, d].forEach((num) => {
    object[num] ? (object[num] += 1) : (object[num] = 1);
  });

  const objectLength = Object.keys(object).length;

  if (objectLength === 1) {
    const p = Object.keys(object)[0];
    return 1111 * p;
  } else if (
    objectLength === 2 &&
    Object.values(object).every((value) => value !== 2)
  ) {
    const p = Number(Object.keys(object).find((key) => object[key] === 3));
    const q = Number(Object.keys(object).find((key) => object[key] === 1));
    return (10 * p + q) ** 2;
  } else if (
    objectLength === 2 &&
    Object.values(object).every((value) => value === 2)
  ) {
    const p = Number(Object.keys(object)[0]);
    const q = Number(Object.keys(object)[1]);
    return (p + q) * Math.abs(p - q);
  } else if (objectLength === 3) {
    const p = Number(Object.keys(object).find((key) => object[key] === 2));
    const qArray = Object.keys(object).filter((key) => object[key] === 1);
    return qArray.reduce((acc, cur) => acc * cur);
  } else if (objectLength === 4) {
    return Math.min(a, b, c, d);
  }
}

console.log(solution(a, b, c, d));
