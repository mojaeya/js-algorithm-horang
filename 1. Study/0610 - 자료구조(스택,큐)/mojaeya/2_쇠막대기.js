console.log(solution("()(((()())(())()))(())"));

function solution(arr) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (x === "(") stack.push(arr[i]);
    else {
      stack.pop();
      if (arr[i - 1] === "(") answer += stack.length; //레이저
      else answer += 1; // 막대기 끝
    }
  }
}
