console.log(solution("(()(()))(()"));

function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  else return "YES";
}
