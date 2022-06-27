let C = 259; // 트럭에 태울 수 있는 최대 무게
let N = 5; // 바둑이 수
let arr = [81, 58, 42, 33, 61]; // 각 바둑이의 무게

console.log(solution(C, N, arr));

function solution(C, N, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  arr.sort((a, b) => b - a);
  function DFS(L, sum) {
    if (sum > C) return;
    if (L === N) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]); // O
      DFS(L + 1, sum); // X
    }
  }
  DFS(0, 0);
  return answer;
}

// function solution(C, N, arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   arr.sort((a, b) => b - a);
//   function DFS(L, sum) {
//     if (sum > C) {
//       console.log("트럭 최대무게 초과 pop");
//       return;
//     }
//     if (L === N) {
//       console.log("DFS(", L, ") 탐색 종료,", "answer :", answer, "sum :", sum);
//       answer = Math.max(answer, sum);
//     } else {
//       console.log("DFS(", L + 1, ",", sum + arr[L], ")");
//       DFS(L + 1, sum + arr[L]);
//       console.log("DFS(", L, ") 이전 주소 복귀");
//       console.log("DFS(", L + 1, ",", sum, ")");
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }
