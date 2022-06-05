console.log(solution(str));

function solution(str) {
  let result;
  let stack = [];
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
    //console.log(stack)
  }
  result = stack.join("");
  return result;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
