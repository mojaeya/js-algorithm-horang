console.log(solution("KKHSSSSSSSE"));

function solution(word) {
  let answer = [];
  let count = 1;
  for (let x of word) {
    if (answer.indexOf(x) === -1) {
      if (count >= 2) {
        answer.push(count);
        count = 1;
      }
      answer.push(x);
    } else {
      count++;
    }
  }
  return answer.join("");
}
