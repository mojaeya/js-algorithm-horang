console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));

function solution(word) {
  let answer = "YES";
  word = word.toLowerCase().replace(/[^a-z]/g, ""); // 문자열 아닌것은 공백
  //   console.log("word:",word);
  if (word.split("").reverse().join("") != word) answer = "NO";
  return answer;
}
