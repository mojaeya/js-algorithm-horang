console.log(solution(11));

function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(Math.floor(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}
