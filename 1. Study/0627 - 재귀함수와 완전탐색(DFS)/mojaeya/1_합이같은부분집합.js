let N = 6;
let arr = [1, 3, 5, 6, 7, 10];

console.log(solution(N, arr));

function solution(N, arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);

  function DFS(L, sum) {
    if (flag) return;
    if (L === N) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]); // O
      DFS(L + 1, sum); // X
    }
  }
  DFS(0, 0);
  return answer;
}
