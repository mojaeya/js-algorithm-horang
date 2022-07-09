function one() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while(queue.length) {
    let v = queue.shift();
    answer+=v + " ";
    for(let nv of [v * 2, v * 2 + 1]) {
      if(nv > 7) continue;
      queue.push(nv);
    }
  }

  return answer;
}
//console.log(one());
function two(start, e) {
  let answer = 0;
  let queue = [];
  let ch = Array.from({length: 10001}, () => 0);
  let dis = Array.from({length: 10001}, () => 0);
  queue.push(start);
  ch[start] = 1; //지점의 중복을 방지
  dis[start] = 0; //점프 횟수를 0으로 초기화
  while(queue.length) {
    let v = queue.shift();
    for(let nv of [v + 1, v - 1, v + 5]) {
      if(nv === e) return dis[v] +  1;
      if(nv > 0 && nv <= 10000 && ch[nv] === 0) { //좌표 범위를 벗어나지 않으면서 가지 않은곳
          ch[nv] = 1;
          queue.push(nv);
          dis[nv] = dis[v] + 1; // 다음 지점의 점프횟수 = 현재 지점에의 점프횟수 + 1
      }
    }
  }
}
//console.log(two(5, 14))
function three(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let m = dx.length;
  let queue = [];

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(board[i][j] === 1) {
        board[i][j] = 0; //여기서 중요한 점은 큐에 섬의 좌표 정보를 푸쉬해주기 전에 반드시 해당 좌표를 순회한 지점으로 체크해야 한다는 것이다(무한 루프 방지)
        queue.push([i, j]);
        answer++;
        while(queue.length) {
          let [x, y] = queue.shift();
          for(let k = 0; k < m; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

const arr = [[1, 1, 0, 0, 0, 1, 0],
           [0, 1, 1, 0, 1, 1, 0],
           [0, 1, 0, 0, 0, 0, 0],
           [0, 0, 0, 1, 0, 1, 1],
           [1, 1, 0, 1, 1, 0, 0],
           [1, 0, 0, 0, 1, 0, 0],
           [1, 0, 1, 0, 1, 0, 0]]
console.log(three(arr));