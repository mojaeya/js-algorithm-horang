let arr = [1, 3, 1, 2, 3];

console.log(solution(5, arr));

function solution(M, arr) {
  let answer = 0;
  let sum = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    while (sum <= M) {
      sum += arr[end];
      answer++;
    }
    if (sum > M) sum -= arr[start++];
  }
  return answer;
}
