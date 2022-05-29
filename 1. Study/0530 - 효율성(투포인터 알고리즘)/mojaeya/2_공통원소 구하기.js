let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));

function solution(arr1, arr2) {
  let answer = [];
  for (let x of arr1) {
    if (arr2.indexOf(x) !== -1) answer.push(x);
  }
  return answer.sort((a, b) => a - b).join(" ");
}
