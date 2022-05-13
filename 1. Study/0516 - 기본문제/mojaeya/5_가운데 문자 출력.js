console.log(solution("good"));

// CODE 1
function solution(word) {
  let answer = "";
  if (word.length % 2 === 0) {
    answer += word[word.length / 2 - 1];
    answer += word[word.length / 2];
  } else {
    answer = word[Math.floor(word.length / 2)];
  }
  return answer;
}

// CODE 2
function solution(word) {
  let answer = "";
  let mid = Math.floor(word.length / 2);
  if (word.length % 2 == 1) answer = word.substring(mid, mid + 1);
  else answer = word.substring(mid - 1, mid + 1);
  return answer;
}

// substr()

// CODE 3
function solution(word) {
  if (word.length % 2 === 1) return word[Math.floor(word.length / 2)];
  else
    return word.slice(
      Math.floor(word.length / 2) - 1,
      Math.floor(word.length / 2) + 1
    );
}
