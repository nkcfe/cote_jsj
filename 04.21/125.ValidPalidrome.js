const s = "0P";

const isPalindrome = (s) => {
  const arrangeS = [...s]
    .filter((val) => {
      const lowerVal = val.toLowerCase();
      const charCode = lowerVal.charCodeAt(0);
      return (
        (charCode >= 97 && charCode <= 122) ||
        (charCode >= 48 && charCode <= 57)
      ); // A-Z or 0-9
    })
    .map((val) => val.toLowerCase())
    .join("");
  console.log(arrangeS);
  return arrangeS === arrangeS.split("").reverse().join("");
};

console.log(isPalindrome(s));
