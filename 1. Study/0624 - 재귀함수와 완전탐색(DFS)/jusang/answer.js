const one = (num) => {
  if (num === 0) return;
  if (num > 0) {
    one(num - 1);
    console.log(num);
  }
};
//console.log(one(3));
const two = (num) => {
  let answer = "";
  const recur = (num) => {
    if (num === 0) return;
    if (num > 0) {
      recur(Math.floor(num / 2));
      answer += num % 2;
    }
  };
  recur(num);
  return answer;
};
//console.log(two());
const dfs = (num) => {
  if (num > 7) {
    return;
  } else {
    console.log(num); // 전위순회
    dfs(num * 2); // 왼쪽자식노드
    //console.log(num) // 중위순회
    dfs(num * 2 + 1); // 오른쪽자식노드
    //console.log(num) // 후위순회
  }
};
//console.log(dfs(1));
const four = (n) => {
  let answer = [];
  // 0부터 3까지의 체크배열 만들기
  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    // v가 4가 되어야지 true
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      // 공집합은 제외
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
};
//console.log(four(3));
