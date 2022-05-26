let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

function solution(N, K, card) {
  let answer;
  let sum = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        sum.push(card[i] + card[j] + card[k]);
      }
    }
  }
  answer = sum.sort((a, b) => b - a);
  return answer[K - 1];
}
