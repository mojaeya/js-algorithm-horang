const one = (n, arr) => {
  let answer = 0;
  //행과 열의 개수를 n+1으로 설정한 이유는, 인덱스 1번부터 사용하기 위해서 0번은 비워둠
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({length: n + 1}, () => 0);

  for(let [a, b] of arr) {
      graph[a][b] = 1; // 방향그래프이므로 체크
  }

  function DFS(v) {
    if(v === n) answer++;
    else {
      for(let i = 1; i <= n; i++) {
        if(graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }

  ch[1] = 1; //출발지점은 체크처리, 안하면 오류남
  DFS(1);

  return answer;
}

const arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]
//console.log(one(5, arr));





//  노드의 개수가 많아지면, 인접행렬에 비해 시간복잡도가 낮으며 메모리도 많이 차지하지 않는 인접리스트를 사용하자.
const two = (n, arr) => {  
  const graph = Array.from({length:n+1},()=> Array());
  const visited = Array.from({length:n+1},()=>0);
  let answer = 0;
  // 인접리스트 만들기
  for(let [a,b] of arr){
    graph[a].push(b);
  }
  function DFS(v){
    if(v === n){
      answer++;
      return;
    }
      // visited[graph[v][i]] => 정점 
      for(let i = 0; i<graph[v].length;i++){
        if(visited[graph[v][i]]===0){
          visited[graph[v][i]] = 1;
          DFS(graph[v][i]);
          visited[graph[v][i]] = 0;
      }
    }

  }
  visited[1] = 1;
  DFS(1);
  return answer;
}
//console.log(two(5, arr))





function three(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

const pathArr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];

//console.log(three(pathArr));

