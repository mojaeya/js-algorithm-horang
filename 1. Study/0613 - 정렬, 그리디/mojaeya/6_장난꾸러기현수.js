let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

function solution(arr) {
  let answer = [];
  let origin = [...arr]; // arr.slice()
  let sortArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (origin[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer.join(" ");
}
