const s = "babad";

const longestPalindrome = (s) => {
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  if (s.length < 2 || s === s.split("").reverse().join("")) {
    return s;
  }

  let result = "";

  for (let i = 0; i < s.length; i++) {
    const oddPal = expand(i, i + 1);

    const evenPal = expand(i, i + 2);

    result = oddPal.length > result.length ? oddPal : result;
    result = evenPal.length > result.length ? evenPal : result;
  }
  return result;
};

console.log(longestPalindrome(s));

