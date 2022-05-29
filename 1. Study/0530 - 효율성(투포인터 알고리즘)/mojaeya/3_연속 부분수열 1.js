let arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(6, arr));

function solution(M, arr) {
  let answer = 0;
  let sum = 0;
  let end = 0;
  for (let st = 0; st < arr.length; st++) {
    while (sum < M && end < arr.length) {
      sum += arr[end];
      end++;
    }
    if (sum === M) answer++;
    sum -= arr[st];
  }
  return answer;
}
