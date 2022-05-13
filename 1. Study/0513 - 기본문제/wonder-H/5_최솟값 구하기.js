/*### 🐯 5. 최솟값 구하기
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
  arrayMin.push(randomNum1000())
}

function randomNum1000() {
  min = Math.ceil(1);
  max = Math.floor(1000);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

const result5 =
  arrayMin.sort((a, b) => {
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
