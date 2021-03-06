// π― 1. μΈ μ μ€ μ΅μκ°
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));

// π― 2. μΌκ°ν νλ³νκΈ°
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

// π― 3. μ°νκ°μ
function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));

// π― 4. 1λΆν° NκΉμ§μ ν©
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(10));

// π― 5. μ΅μκ° κ΅¬νκΈ°
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

// π― 6. νμ
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

// π― 7. 10λΆμ 
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
