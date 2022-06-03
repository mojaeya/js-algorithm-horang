let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(10, 3, arr));

// CODE 1
function solution(N, K, sale) {
  let answer = 0;
  let curSum = 0;

  for (let i = 0; i < K; i++) {
    curSum += sale[i];
    answer = curSum;
  }

  for (let j = K; j < N; j++) {
    curSum += sale[j] - sale[j - K];
    answer = Math.max(answer, curSum);
  }

  return answer;
}

// CODE 2
function solution(n, k, arr) {
  let lt = (rt = currentSum = 0);
  let max = Number.MIN_SAFE_INTEGER;

  while (rt < n) {
    currentSum += arr[rt];
    if (rt - lt + 1 === k) {
      max = Math.max(max, currentSum);
      currentSum -= arr[lt++];
    }
    rt++;
  }
  return max;
}
