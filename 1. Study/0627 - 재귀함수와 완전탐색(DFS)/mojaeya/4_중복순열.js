// 서로 다른 것 중에서 몇 개를 선택하여 일렬로 배열할 때 배열 하나하나를 순열이라 한다.

let N = 3; // N까지 적힌 구슬
let M = 2; // 몇번 뽑을지

console.log(solution(N, M));

function solution(N, M) {
  let tmp = Array.from({ length: M }, () => 0);
  let answer = [];
  let cnt = 0;
  function DFS(L) {
    if (L === M) {
      answer.push([...tmp]); // tmp.slice()
      cnt++;
    } else {
      for (let i = 1; i <= N; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return [answer, cnt];
}

// function solution(N, M) {
//   let tmp = Array.from({ length: M }, () => 0);
//   let answer = [];
//   let cnt = 0;
//   function DFS(L) {
//     if (L === M) {
//       console.log("DFS(", L, ") 탐색 종료");
//       answer.push([...tmp]); // tmp.slice()
//       cnt++;
//     } else {
//       for (let i = 1; i <= N; i++) {
//         console.log("DFS(", L, ") for loop :", i);
//         console.log("tmp[", L, "]", "=", i);
//         tmp[L] = i;
//         DFS(L + 1);
//         console.log("DFS(", L, ") 이전 주소 복귀, for loop :", i + 1);
//       }
//     }
//   }
//   DFS(0);
//   return [answer, cnt];
// }
