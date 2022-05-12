let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

// CODE 1
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

// CODE 2
function solution(arr) {
  let answer = Math.min(...arr);
  return answer;
}

// Number.MIN_SAFE_INTEGER 상수는 JavaScript에서 안전한 최소 정수값을 나타낸다.
// Number.MAX_SAFE_INTEGER 상수는 JavaScript에서 안전한 최대 정수값을 나타낸다.
