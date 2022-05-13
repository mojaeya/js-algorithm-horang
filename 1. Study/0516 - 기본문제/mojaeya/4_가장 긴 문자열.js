let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

function solution(words) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of words) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
