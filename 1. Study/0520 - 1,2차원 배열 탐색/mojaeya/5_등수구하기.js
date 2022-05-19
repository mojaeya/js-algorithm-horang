console.log(solution(5, [87, 89, 92, 100, 76]));

function solution(N, arr) {
  let answer = [];
  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (arr[i] < arr[j]) rank++;
    }
    answer.push(rank);
  }
  return answer.join("");
}
