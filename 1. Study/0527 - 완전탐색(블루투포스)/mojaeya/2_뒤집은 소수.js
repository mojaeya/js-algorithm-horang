console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));

function solution(N, arr) {
  let answer = [];
  let temp = "";
  for (let i = 0; i < N; i++) {
    let strNum = arr[i].toString();
    for (let j = strNum.length - 1; j >= 0; j--) {
      temp += strNum[j];
    }
    // console.log("temp:", parseInt(temp));
    if (isPrime(parseInt(temp))) {
      answer.push(parseInt(temp));
    }
    temp = "";
  }
  return answer;
}

// 소수 판별
function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
