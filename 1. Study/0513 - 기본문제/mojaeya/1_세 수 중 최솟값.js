console.log(solution(6, 5, 11));

// CODE 1
function solution(A, B, C) {
  let answer;
  if (A < B) answer = A;
  else answer = B;
  if (C < answer) answer = C;
  return answer;
}

// CODE 2
function solution(A, B, C) {
  let answer = Math.min(A, B, C);
  return answer;
}
