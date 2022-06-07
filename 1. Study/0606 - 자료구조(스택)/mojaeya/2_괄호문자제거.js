let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

function solution(str) {
  let answer;
  let stack = [];
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "("); // (가 나올 때까지 모두 pop
    } else stack.push(x); // (와 문자는 모두 push
    // console.log(stack);
  }
  answer = stack.join("");
  return answer;
}
