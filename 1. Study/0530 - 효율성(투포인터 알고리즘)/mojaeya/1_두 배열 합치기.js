let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));

function solution(arr1, arr2) {
  let answer = arr1.concat(arr2).sort((a, b) => a - b);
  return answer.join(" ");
}
