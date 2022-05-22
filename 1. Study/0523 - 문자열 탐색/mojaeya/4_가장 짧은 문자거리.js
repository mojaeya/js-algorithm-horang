console.log(solution("tteachermodett", "e"));

function solution(s, t) {
  let answer = [];
  // let count = 0; testcase : tteachermodett, 출력 : 2 1 0 1 2 1 0 1 2 2 1 0 1 2
  let count = 1000;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      count = 0;
      answer.push(count);
    } else {
      count++;
      answer.push(count);
    }
  }

  //   console.log("answer:", answer);

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      count = 0;
    } else {
      count++;
      //   console.log("answer[i]:", answer[i], "count:", count);
      answer[i] = Math.min(answer[i], count);
    }
  }
  console.log(answer.join(""));
}
