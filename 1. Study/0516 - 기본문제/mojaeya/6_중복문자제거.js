console.log(solution("ksekkset"));

// CODE 1
function solution(word) {
  let answer = [];
  for (let x of word) {
    if (answer.indexOf(x) === -1) answer.push(x);
  }
  return answer.join("");
}

// CODE 2
function solution(word) {
  let answer = "";
  // 찾을 문자열이 여러 개인 경우 첫 번째 찾은 문자열의 위치를 반환
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === i) answer += word[i];
  }
  return answer;
}
