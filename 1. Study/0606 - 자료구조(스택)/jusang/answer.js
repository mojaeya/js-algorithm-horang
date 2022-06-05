// ( 이 들어오면 push )이 들어오면 pop 해줘서 스택이 비어있으면 YES
// 스택이 비어잇고 ) 면 push 
// 스택이 안비었는데 ) 면 pop 
// 스택이 안비었는데 ) 가 들어있으면 push
const one = (str) => {
  const stack = []
  str.split("").forEach(cur => {
    if (cur === '(') {
      stack.push(cur)
    } else {
      if (!stack.length) {
        stack.push(cur)
      } else {
        stack.includes(')') ? stack.push(cur) :
          stack.pop(cur)
      }
    }
  })
  console.log(stack)
  return !stack.length ? 'YES' : 'NO'
}
// console.log(one('(()(()))(()'))
// console.log(one('(())))))))))))))'))
// console.log(one('(())'))
// console.log(one('(()))'))

const two = (str) => {
  // )가 나오기 전까지는 계속 스택에 push 하다가
  // )가 나오면 pop하는데 스택에 (가 들어 있으면 멈춤
  const stack = []
  str.split("").forEach((cur, idx, arr) => {
    stack.push(cur);
    if (cur === ')' && arr.includes('(')) {
      let tempIdx = idx;
      let deleted;
      while (arr[tempIdx] !== '(') {        
        deleted = stack.pop(arr[tempIdx]) === '(';
        if (deleted) break;
        tempIdx--;
      }
      if (!deleted) stack.pop(arr[tempIdx]);
    }
  });
  return stack.join('');
}
//console.log(two('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))
//console.log(two('(AN)N'))
const three = (board, moves) => {
  const basket = []; // 인형 뽑은 바구니
  let count = 0;
  // moves 반복문 돌려서 인형 pop 하고 
  for(let i=0; i<moves.length; i++) {
    for(let j=0; j<board.length; j++) {
      const curDoll = board[j][moves[i]-1]; // 현재 뽑은 인형
      if (curDoll > 0) {
        // 뽑은 인형은 board 배열에선 삭제(0으로 바꿔줌) 
        board[j][moves[i]-1] = 0;
        // 바구니의 제일 위에 있는 인형과 현재 뽑은 인형이 같으면 
        // 바구니의 제일 위에 있는 인형을 basket에서 pop
        if (basket.length && basket[basket.length-1] === curDoll) {
          basket.pop(basket[basket.length-1]);
          count += 2; // 인형 터뜨릴때마다 count 증가
        } else {
          basket.push(curDoll); // 위의 조건에 해당 안되면 그냥 push 
        }
        break;
      }
    }
  }
  return count;
}
//console.log(three([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))
