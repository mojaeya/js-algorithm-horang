let str = "JavaScriptAlgorithmHorangStudy";
console.log(solution(str));

// CODE 1
function solution(word) {
  let count = 0;
  let answer = "";
  let answer2 = word.toUpperCase();
  for (let x of word) {
    // let num = x.charCodeAt();
    // if(num>=65 && num<=90) count++;
    if (x === x.toUpperCase()) {
      count++;
      answer += x;
    } else answer += x.toLowerCase();
  }
  console.log(`${count}
${answer}
${answer2}`);
}

// ASCII코드 대문자 65~90 소문자 97~122
