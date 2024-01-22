const arr = [0, 1, 2, 4, 3]
const queries = [[0, 4, 1],[0, 3, 2],[0, 3, 3]]

function solution(arr, queries) {

    for (let i=0; i < queries.length; i++) {
        const [s,e,k] = queries[i]

        for(let j = s; j<=e; j++) {
            if (j % k === 0) {
                arr[j] += 1
            }
        }
    }
    return arr
}

console.log(solution(arr,queries))