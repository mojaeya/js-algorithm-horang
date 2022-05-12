// 세 변의 길이를 알 때 (가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야)
console.log(solution(6, 7, 11));

function solution(A, B, C) {
  let answer = "NO";
  let max = Math.max(A, B, C);
  let sum = A + B + C;
  if (sum - max > max) answer = "YES";
  return answer;
}
