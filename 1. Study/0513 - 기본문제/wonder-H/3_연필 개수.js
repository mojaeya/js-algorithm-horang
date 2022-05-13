/*### 🐯 3. 연필 개수
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

