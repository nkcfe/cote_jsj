const name = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

function solution(names) {
  return names.filter((name, idx) => idx % 5 === 0);
}

console.log(solution(name));
