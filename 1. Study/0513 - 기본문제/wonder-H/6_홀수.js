/*### 🐯 6. 홀수
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

