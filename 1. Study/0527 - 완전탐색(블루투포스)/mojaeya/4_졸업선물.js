let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(5, 28, arr));

function solution(N, M, goods) {
  let answer = 0;
  let count = 0;
  let temp = [];
  goods.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < N; i++) {
    let budget = M - (goods[i][0] / 2 + goods[i][1]);
    count = 1;
    for (let j = 0; j < N; j++) {
      if (j !== i && goods[j][0] + goods[j][1] <= budget) {
        budget -= goods[j][0] + goods[j][1];
        count++;
      } else break;
    }
    answer = Math.max(answer, count);
  }
  return answer;
}
