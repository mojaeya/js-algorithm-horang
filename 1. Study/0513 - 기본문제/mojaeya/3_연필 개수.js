console.log(solution(25));

// CODE 1
function solution(N) {
  let answer;
  if (N % 12 > 0) answer = Math.floor(N / 12) + 1;
  else answer = Math.floor(N / 12);
  return answer;
}

// CODE 2
function solution(N) {
  let answer;
  answer = Math.ceil(N / 12);
  return answer;
}

// Math.floor() : 소수점 이하를 버림.
// Math.ceil() : 소수점 이하를 올림.
// Math.round() : 소수점 이하를 반올림.
