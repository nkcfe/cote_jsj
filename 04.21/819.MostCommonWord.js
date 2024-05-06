const paragraph = "a, a, a, a, b,b,b,c, c";

const banned = ["a"];

const mostCommonWord = (paragraph, banned) => {
  const words = paragraph
    .replace(/[^\w\s]/g, " ") // 정규식 설명 : \w(모든 단어 문자), \s(모든 공백 문자) 를 제외한 모든 문자를 " "로 대체
    .toLowerCase() // 소문자로 변경.
    .split(/\s+/) //공백 문자를 기준으로 단어를 분리.
    .filter((word) => !banned.includes(word)); // 금지된 단어 제외

  // count 객체 생성
  const counts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // count 큰 순으로 정렬하기
  const mostCommon = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

  return mostCommon;
};

console.log(mostCommonWord(paragraph, banned));
