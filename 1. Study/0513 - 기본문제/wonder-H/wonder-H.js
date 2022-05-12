/*

### 🐯 1. 세 수 중 최솟값

100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요. (정렬을 사용하면 안됩니다)
*/
function randomNum100() {
  min = Math.ceil(1);
  max = Math.floor(100);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

function minNumber(A, B, C) {
  let minNum = A < B ? A : B;

  if (C < minNum) {
    minNum = C;
  }

  return minNum;
}
console.log('result1 : ', minNumber(randomNum(), randomNum(), randomNum()));

/**

### 🐯 2. 삼각형 판별하기

길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

-> 가장 긴 막대기 1개 < 다른 두 개의 합

*/

function checkLength(A, B, C) {
  let maxNum = A > B ? A : B;

  if (C > maxNum) {
    maxNum = C;
    console.log(`${maxNum} < ${A + B}`);
    return C < A + B ? 'YES' : 'NO';
  } else if (A === maxNum) {
    console.log(`${maxNum} < ${C + B}`);
    return A < B + C ? 'YES' : 'NO';
  } else {
    console.log(`${maxNum} < ${A + C}`);
    return B < A + C ? 'YES' : 'NO';
  }
}

console.log('result2 : ', checkLength(randomNum(), randomNum(), randomNum()));




/*

### 🐯 3. 연필 개수

연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

> 입력설명

첫 번째 줄에 1000 이하의 자연수 N이 입력된다.

> 출력설명

첫 번째 줄에 필요한 다스 수를 출력합니다.

> 입력예제

25

> 출력예제

3

*/


function randomNum1000() {
  min = Math.ceil(1);
  max = Math.floor(1000);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

function pencil(num) {
  return Math.ceil(num / 12);
}

console.log('result3 : ', pencil(randomNum1000()));






/*

### 🐯 4. 1부터 N까지 합 출력하기

자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

> 입력설명

첫 번째 줄에 20이하의 자연수 N이 입력된다..

> 출력설명

첫 번째 줄에 1부터 N까지의 합을 출력한다.

> 입력예제

6

> 출력예제

21

*/

function randomNum10() {
  min = Math.ceil(1);
  max = Math.floor(20);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

function sum(num) {
  let result = 0;
  let i = 0;
  do {
    i = i + 1;
    result = result + i;
  } while (i < num);
  return result;
}

console.log('result4 : ', sum(randomNum10()));



/*
### 🐯 5. 최솟값 구하기

7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요..

> 입력설명

첫 번째 줄에 7개의 수가 주어진다.

> 출력설명

첫 번째 줄에 가장 작은 값을 출력한다.

> 입력예제

5 3 7 11 2 15 17

> 출력예제

2
*/

const arrayMin = [];

for (let i = 0; i < 7; i += 1) {
  array.push(randomNum1000())
}

function randomNum1000() {
  min = Math.ceil(1);
  max = Math.floor(1000);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

const result5 =
  array.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    else {
      return 0;
    }
  })

console.log('result5 : ', result5[0]);



/*

### 🐯 6. 홀수

7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하는 프로그램을 작성하세요.

> 입력설명

자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.

> 출력설명

홀수들의 합을 출력한다.

> 입력예제

12 77 38 41 53 92 85

> 출력예제

256

*/

const array = [];
const resultArray = [];

for (let i = 0; i < 7; i += 1) {
  array.push(randomNum100())
}

function randomNum100() {
  min = Math.ceil(1);
  max = Math.floor(100);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

for (num of array) {
  if (num % 2 !== 0) {
    resultArray.push(num)
    console.log(resultArray)
  }
}

const reducer = (accumulator, curr) => accumulator + curr;

console.log('result6 : ', resultArray.reduce(reducer));




/*

### 🐯 7. 10부제

서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금 지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한 다.
여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

> 입력설명

첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자리 숫자가 주어진다.

> 출력설명

주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니다.

> 입력예제

3  
25 23 11 47 53 17 33

> 출력예제

3
*/


function randomNum10() {
  min = Math.ceil(0);
  max = Math.floor(10);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}
const randomDay = randomNum10()

function randomNum99() {
  min = Math.ceil(1);
  max = Math.floor(99);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}
const randomCars = [];
for (let i = 0; i < 7; i += 1) {
  randomCars.push(randomNum99())
}

function result7(randomDay, randomCars) {
  let count = 0;
  for (car in randomCars) {
    if (car % 10 === randomDay) {
      count = count + 1;
    }
  }
  return count
};

console.log('result7 : ', result7(randomDay, randomCars))
