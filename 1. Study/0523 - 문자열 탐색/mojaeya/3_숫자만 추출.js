console.log(solution("g0en2T0s8eSoft"));

// // CODE 1
function solution(word) {
  let number = [];
  for (let x of word) {
    if (Number(x) * 0 === 0) number.push(Number(x));
  }
  // console.log(number);
  if (number[0] === 0) number.shift();
  return number.join("");
}

// // CODE 2
function solution(word) {
  let answer = "";
  for (let x of word) {
    if (isNaN(x) != true) answer += x;
  }
  return parseInt(answer);
}

// CODE 3
function solution(word) {
  let onlyNum = word.replace(/[^0-9]/g, ""); // 숫자 아닌것은 공백

  console.log(Number(onlyNum));
}
