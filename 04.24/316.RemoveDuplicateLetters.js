const removeDuplicateLetters = (s) => {
  const counter = {};
  const seen = new Set();
  const stack = [];

  // 카운터 객체 생성
  for (i in s) {
    if (counter[s[i]]) {
      counter[s[i]]++;
    } else {
      counter[s[i]] = 1;
    }
  }

  // s loop
  for (i in s) {
    const char = s[i];
    // 현재 char count -1
    counter[char]--;

    // seen에 char 이미 있을 경우 건너뛰기
    if (char in seen) {
      continue;
    }

    // stack이 있고, char가 사전적 앞자리이며, count가 0보다 크면(중복 문자열일 경우) seen에서 삭제
    while (
      stack &&
      char < stack[stack.length - 1] &&
      counter[stack[stack.length - 1]] > 0
    ) {
      seen.delete(stack.pop());
    }

    stack.push(char);
    seen.add(char);
  }

  return stack.join("");
};

const s = "cbacdcbc"; // abc
console.log(removeDuplicateLetters(s));
