let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

function solution(word, char) {
  let count = 0;
  for (let x of word) {
    if (x === char) count++;
  }
  return count;
}
