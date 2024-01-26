const str_list = ["l"];

function solution(str_list) {
  const lIndex = str_list.indexOf("l");
  const rIndex = str_list.indexOf("r");

  return rIndex === -1
    ? str_list.slice(0, lIndex)
    : lIndex === -1
    ? str_list.slice(rIndex + 1)
    : lIndex < rIndex
    ? str_list.slice(0, lIndex)
    : str_list.slice(rIndex + 1);
}


function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}

console.log(solution(str_list));
