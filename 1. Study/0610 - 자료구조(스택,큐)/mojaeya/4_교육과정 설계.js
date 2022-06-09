console.log(solution("CBA", "CBDAGE"));

function solution(reqSub, plan) {
  let answer = "YES";
  let queue = Array.from(reqSub);
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  return answer;
}
