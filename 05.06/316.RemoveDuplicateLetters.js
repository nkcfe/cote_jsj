const s = "cbacdcbc";

function removeDuplicateLetters(s) {
  const counter = {};
  const seen = new Set();
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const word = s[i];
    if (!(word in counter)) {
      counter[word] = 1;
    } else {
      counter[word] += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    counter[char] -= 1;
    if (char in seen) {
      continue;
    }

    while (
      stack &&
      char < stack[stack.length - 1] &&
      counter[stack[stack.length - 1]] > 0
    ) {
      seen.delete(stack.pop());
      console.log(seen);
    }
    stack.push(char);
    seen.add(char);
  }

  return stack.join("");
}

console.log(removeDuplicateLetters(s)); // 'acdb'
