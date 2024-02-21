const numbers = [2, 1, 3, 4, 1];

function solution(numbers) {
  function getPermutation(arr, num) {
    const result = [];
    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutation(rest, num - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      result.push(...attached);
    });
    return result;
  }
  return [
    ...new Set(
      getPermutation(numbers, 2).map((v) => {
        return v.reduce((acc, cur) => acc + cur);
      })
    ),
  ].sort((a, b) => a - b);
}

console.log(solution(numbers));
