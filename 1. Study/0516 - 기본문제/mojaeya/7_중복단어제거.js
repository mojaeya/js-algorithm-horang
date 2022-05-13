let str = ["html", "css", "html", "css", "javascript"];
console.log(solution(str));

// CODE 1
function solution(words) {
  let arr = [];
  for (let x of words) {
    if (arr.indexOf(x) === -1) arr.push(x);
  }
  console.log(arr.join("\n"));
}
