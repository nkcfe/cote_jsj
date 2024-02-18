const s = "try hello world";

function solution(s) {
  const words = s.split(" ");
  const transformedWords = words.map((word) => {
    const chars = [...word].map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    });
    return chars.join("");
  });
  return transformedWords.join(" ");
}

console.log(solution(s)); // 출력: "TrY HeLlO WoRlD"
