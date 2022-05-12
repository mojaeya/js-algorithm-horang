let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// CODE 1
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    let n = x.toString();
    if (+n[1] === day) answer++;
  }
  return answer;
}

// CODE 2
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}
