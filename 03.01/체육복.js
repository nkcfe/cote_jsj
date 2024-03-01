const n = 5;
const lost = [4, 2];
const reserve = [3, 5];

function solution(n, lost, reserve) {
  const realLost = lost.sort().filter((a) => !reserve.includes(a));
  let realReserve = reserve.sort().filter((a) => !lost.includes(a));
  const noHave = realLost.filter((a) => {
    const b = realReserve.find((r) => Math.abs(r - a) <= 1);
    if (!b) return true;
    realReserve = realReserve.filter((r) => r !== b);
  });

  return n - noHave.length;
}

console.log(solution(n, lost, reserve)); // 5
