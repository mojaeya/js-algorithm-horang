// ๐ฏ 1. ํ์์ ์ฐ์ฐ
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));

// ๐ฏ 2. ์ ๋ง๋๊ธฐ
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer++;
      //stack.pop(); ์ด ์์น์ ํ๋ฉด ๋ ์ด์ ๊น์ง ์นด์ดํํ๋ค.
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));

// ๐ฏ 3. ๊ณต์ฃผ๊ตฌํ๊ธฐ
function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));

// ๐ฏ 4. ๊ต์ก๊ณผ์ ์ค๊ณ
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
