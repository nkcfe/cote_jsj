const n = 15

function solution(n) {
  if (n === 1) return 1
  let count = 0
  let start = 1
  let end = 1
  let sum = 1
  // 1 2 3 4 5 6 7 8
  while (start <= Math.ceil(n / 2)) {
    console.log(sum)
    if (sum < n) {
      end++
      sum += end
    } else if (sum > n) {
      sum -= start
      start++
    } else {
      count++
      sum -= start
      start++
    }
  }

  return count + 1
}

console.log(solution(n))

// 1 2 3 4 5 15
// 2 3 4 5 6 20
// 3 4 5 6 18
// 4 5 6 15
// 5 6 11
// 5 6 7 18
// 6 7 13
// 6 7 8 21
// 7 8 15
// 8 
