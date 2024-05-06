function isPalindrome(x) {
  origin = x.toString();
  const reverseX = x.toString().split("").reverse().join("");
  if (origin !== reverseX) {
    return false;
  }

  return true;
}

const x = -121;
console.log(isPalindrome(x));
