let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));

function solution(N, M, test) {
  let answer = 0;
  //   let tmp = [];
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let count = 0;
      for (let k = 0; k < M; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < N; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === M) {
        // tmp.push([i, j]);
        answer++;
      }
    }
  }
  //   console.log(tmp);
  return answer;
}
