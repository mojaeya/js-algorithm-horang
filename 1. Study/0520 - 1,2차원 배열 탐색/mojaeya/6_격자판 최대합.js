let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(5, arr));

// CODE 1
function solution(N, board) {
  let answer = Number.MIN_SAFE_INTEGER;

  // 행,열 합 비교
  for (let i = 0; i < N; i++) {
    let rowSum = (colSum = 0);
    for (let j = 0; j < N; j++) {
      rowSum += board[i][j];
      colSum += board[j][i];
    }
    answer = Math.max(answer, rowSum, colSum);
  }

  // 대각선 합 비교
  let leftCroSum = (rightCroSum = 0);
  for (let i = 0; i < N; i++) {
    leftCroSum += board[i][i];
    rightCroSum += board[i][N - i - 1];
  }

  answer = Math.max(answer, leftCroSum, rightCroSum);
  return answer;
}

// // CODE 2
// function solution(N, board) {
//   let answer;

//   let rowSumArr = [];
//   for (let i = 0; i < N; i++) {
//     let rowSum = 0;
//     for (let j = 0; j < N; j++) {
//       rowSum += board[i][j];
//     }
//     rowSumArr.push(rowSum);
//   }

//   let colSumArr = [];
//   for (let i = 0; i < N; i++) {
//     let colSum = 0;
//     for (let j = 0; j < N; j++) {
//       colSum += board[j][i];
//     }
//     colSumArr.push(colSum);
//   }

//   let crossSumArr = [];
//   let leftCroSum = 0;
//   let rightCroSum = 0;
//   for (let i = 0; i < N; i++) {
//     leftCroSum += board[i][i];
//     rightCroSum += board[i][N - i - 1];
//   }
//   crossSumArr.push(leftCroSum, rightCroSum);

//   let numbers = [...rowSumArr, ...colSumArr, ...crossSumArr];
//   answer = Math.max(...numbers);

//   return answer;
// }
