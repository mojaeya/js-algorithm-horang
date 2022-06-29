console.log(solution(5));

function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}

// // 이렇게 하면 DFS(1) 이 안나옴
// function solution(n) {
//     let answer = 1;
//     function DFS(n) {
//       if (n === 1) return;
//       else {
//         console.log(`DFS(${n})`);
//         answer *= n;
//         console.log(n);
//         DFS(n - 1);
//       }
//     }
//     DFS(n);
//     return answer;
//   }
