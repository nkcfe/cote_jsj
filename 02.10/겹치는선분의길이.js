const lines = [
  [0, 2],
  [-3, -1],
  [-2, 1],
];

function solution(lines) {
  const sets = lines.map((line) => {
    const [start, end] = line;
    const set = new Set();
    for (let i = start; i <= end; i++) {
      set.add(i);
    }
    return set;
  });

  const intersect1 = [...sets[0]].filter((x) => [...sets[1]].includes(x));
  const intersect2 = [...sets[1]].filter((x) => [...sets[2]].includes(x));
  const intersect3 = [...sets[0]].filter((x) => [...sets[2]].includes(x));
  const result = new Set([...intersect1, ...intersect2, ...intersect3]);

  return result.size === 2 ? 0 : result.size - 1;
}

console.log(solution(lines));
