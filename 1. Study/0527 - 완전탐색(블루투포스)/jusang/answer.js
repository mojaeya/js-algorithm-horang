const one = (arr) => {
  let answer = 0;
  // 각 요소의 자리수 합을 구하고 
  // 그 합을 프로퍼티로 가지는 객체로 배열을 변경
  const parsedArr = arr.map(cur => {
    const sum = String(cur)
      .split("")
      .reduce((a, c) => a + parseInt(c, 10), 0);
    return { num: cur, sum: sum };
  });
  parsedArr.sort((a, b) => b.sum - a.sum);
  console.log(parsedArr);
  answer = parsedArr[0].num;
  const len = parsedArr.length;
  
  for (let i = 1; i < len; i++) {
    if (parsedArr[i].sum !== parsedArr[0].sum) break;
    // sum이 같을 때 처리
    if (parsedArr[i].num > answer) answer = parsedArr[i].num;
  } 
  return answer;
};

//console.log(one([1235, 460, 603, 40, 521, 137, 123]));
const isPrime = (n) => {
    if(n===1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}
const two = arr => {
  let answer = [];
  const newArr = arr.map((v, i) => {
    let str = String(v).split("").reverse().join("");
    while (str.indexOf('0') === 0) {
      str = str.slice(1);
    }
    return +str;
  });
  newArr.forEach(v => {
    if(isPrime(v)) answer.push(v);
  })
  return answer; 
}
//console.log(two([32, 55, 62, 20, 250, 370, 200, 30 ,100]))

const three = () => {}
const four = (학생수, 예산, arr) => {
  let answer = 0;
  arr.sort((a,b)=> (a[0]+a[1] > b[0]+b[1]) ? 0 : -1);
  console.log(arr);
  arr.forEach((v,i)=>{
    const totalPrice = v[0]+v[1];
    if (예산 >= totalPrice) {
      예산 -= totalPrice;
      answer++;
    } else {
      const salePrice = v[0] * 0.5 + v[1];
      if (예산 >= salePrice) {
        answer++;
      }
    }
    console.log(v,answer,예산);
  });
  return answer;
}
//console.log(four(5,28,[[6,6],[2,2],[4,3],[4,5],[10,3]]));

const five = (n, k, arr) => {
  let answer = 0;
  let tempArr = [];
  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      for (let l=0; l<n; l++) {
        if(i === j || j ===l || l === i) continue;
        tempArr.push(arr[i] + arr[j] + arr[l]);
      }
    }
  }
  tempArr.sort((a,b)=>b-a);
  const set = new Set(tempArr);
  const newArr = [...set];
  console.log(newArr);
  answer = newArr[k-1];
  return answer;
}
//console.log(five(10,3,[13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

