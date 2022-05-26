console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));

function solution(N, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    let num = arr[i].toString();
    for (let j = 0; j < num.length; j++) {
      sum += Number(num[j]);
    }
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      if (arr[i] > answer) answer = arr[i];
    }
  }
  return answer;
}
