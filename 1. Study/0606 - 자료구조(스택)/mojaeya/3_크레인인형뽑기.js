let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));

function solution(board, moves) {
  let basket = [];
  let cnt = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      const pick = board[j][move];
      if (pick !== 0) {
        board[j][move] = 0;
        if (basket[basket.length - 1] === pick) {
          basket.pop();
          cnt += 2;
        } else basket.push(pick);
        break;
      }
    }
  }
  return cnt;
}
