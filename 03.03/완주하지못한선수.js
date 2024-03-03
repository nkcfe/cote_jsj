const paricipant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
  const freqMap = {};

  for (let c of completion) {
    freqMap[c] = (freqMap[c] || 0) + 1;
  }

  for (let p of participant) {
    if (freqMap[p] > 0) {
      freqMap[p]--;
    } else {
      return p;
    }
  }

  return freqMap;
}


console.log(solution(paricipant, completion)); // "leo"
