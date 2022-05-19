//1

const one = length => {
  const numArr = [];
  let answer = [];
  for(let i=0; i<length; i++) {
    numArr.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log(numArr);
  answer.push(numArr[0]);
  for(let i=1; i<length; i++) {
    if (numArr[i] > numArr[i-1]) answer.push(numArr[i]);
  }
  return answer;
}

//console.log(one(6));

const two = length => {
  const studentArr = [];
  let answer = [];
  let tallest = 0;
  for(let i=0; i<length; i++) {
    studentArr.push(Math.floor(Math.random() * 200) + 1);
  }
  console.log(studentArr);
  answer.push(studentArr[0]);
  tallest = studentArr[0];
  for(let i=1; i<length; i++) {
    if (studentArr[i] > tallest) {
      answer.push(studentArr[i]);
      tallest = studentArr[i];
    }
  }
  return answer.length;
}

//console.log(two(8));

const three = (cnt, aArr, bArr) => {
  let answer = [];
  for (let i=0; i<cnt; i++) {
    const diff = aArr[i] - bArr[i];
    switch (diff) {
      case -2:
        answer.push('A');
        break;
      case -1:
        answer.push('B');
        break;
      case 0:
        answer.push('D');
        break;  
      case 1:
        answer.push('A');
        break;
      case 2:
        answer.push('B');
        break;
    }
  }
  return answer;
}

//console.log(three(5, [2,3,3,1,3], [1,1,2,2,3]));

const four = length => {
  const arr = [];
  let answer = 0;
  let score = 0;
  let isContinuouslyCorrect = false;
  
  for(let i=0; i<length; i++) {
    arr.push(Math.round(Math.random()));
  }
  console.log(arr);
  for(let i=0; i<length; i++) {
    isContinuouslyCorrect = false;
    if (i>0 && arr[i-1]===1 && arr[i]===1) {
      isContinuouslyCorrect = true;
      score += 1;
    }
    if(!isContinuouslyCorrect) {
      score = arr[i] ? 1 : 0;
    }
    answer += score;
  }
  return answer;
}
//console.log(four(10));

const five = (scoreArr) => {
  const newArr = scoreArr.map((score,idx)=>{
    return {score, index: idx + 1};
  });
  return newArr.sort((a, b) => b.score - a.score).map(cur => cur.index);
}
//console.log(five([87,89,92,100,76]));
//console.log(solution([90,90,92,100,100]));

const six = (n, arr) => {
  let tempArr = [];
  let garo = 0, sero = 0, daegak = 0, daegak_reverse = 0;
  for (let i=0; i<n; i++) {
    daegak_reverse += arr[i][n-1-i];
    for (let j=0; j<n; j++) {
      garo += arr[i][j];
      sero += arr[j][i];
      if (i===j) {
        daegak += arr[i][j];
      }
    }
    tempArr.push(sero);
    sero = 0;
    tempArr.push(garo);
    garo = 0;
  }
  tempArr.push(daegak);
  tempArr.push(daegak_reverse);
  return Math.max(...tempArr);
}
const ex_arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
//console.log(six(5, ex_arr));

const seven = (n, arr) => {
  let answer = 0;
  const zeroArr = Array.from({length: n+2}, v => 0);
  for (let i=0; i<n; i++) {
    arr[i].unshift(0);
    arr[i].push(0);
  }
  arr.unshift(zeroArr);
  arr.push(zeroArr);
  console.log(arr);
  for (let i=1; i<n+1; i++) {
    for (let j=1; j<n+1; j++) {
      if((arr[i][j]>arr[i][j-1]) && (arr[i][j]>arr[i-1][j]) && (arr[i][j]>arr[i][j+1]) && (arr[i][j]>arr[i+1][j])) answer++;
    }
  }
  return answer;
}

const ex_arr_2 = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
//console.log(seven(5, ex_arr_2));