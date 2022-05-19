let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(5, arr));

function solution(N, board) {
  let count = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let peak = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < N &&
          board[nx][ny] >= board[i][j]
        ) {
          peak = 0;
          break;
        }
      }
      if (peak) count++;
    }
  }
  return count;
}
