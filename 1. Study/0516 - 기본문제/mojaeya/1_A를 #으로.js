let str = "BANANA";
console.log(solution(str));

// CODE 1
function solution(word) {
  let answer = "";
  for (let x of word) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

// CODE 2
function solution(word) {
  let answer = word;
  answer = answer.replace(/A/g, "#");
  return answer;
}

// String.replace 메서드 / 정규표현식 사용
