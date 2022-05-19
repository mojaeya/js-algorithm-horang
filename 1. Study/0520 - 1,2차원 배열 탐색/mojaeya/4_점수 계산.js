console.log(ox(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

function ox(N, arr) {
  let answer = 0;
  let score = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] === 1) {
      score++;
      answer += score;
    } else score = 0;
  }
  return answer;
}
