console.log(solution("352+*9-"));

function solution(postfix) {
  let answer = [];
  for (let x of postfix) {
    if (!isNaN(x)) answer.push(Number(x));
    else {
      let rt = answer.pop();
      let lt = answer.pop();
      switch (x) {
        case "+":
          answer.push(lt + rt);
          break;
        case "-":
          answer.push(lt - rt);
          break;
        case "*":
          answer.push(lt * rt);
          break;
        case "/":
          answer.push(lt / rt);
          break;
      }
    }
  }
  return answer[0];
}

//문자열 타입이든 숫자 타입이든 숫자가 입력되면 isNaN() 함수는 false를 리턴
