// 🐯 1. 세 수 중 최솟값
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));

// 🐯 2. 삼각형 판별하기
function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));

// 🐯 3. 연필개수
function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));

// 🐯 4. 1부터 N까지의 합
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(10));

// 🐯 5. 최솟값 구하기
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// 🐯 6. 홀수
function solution(arr) {
  let sum = 0;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
    }
  }
  return sum;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 🐯 7. 10부제
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
