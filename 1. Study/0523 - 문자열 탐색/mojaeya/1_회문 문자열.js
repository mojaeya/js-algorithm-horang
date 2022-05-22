console.log(solution("gooG"));

function solution(word) {
  let answer = "YES";
  word = word.toLowerCase();
  if (word.split("").reverse().join("") != word) answer = "NO";
  return answer;
}
