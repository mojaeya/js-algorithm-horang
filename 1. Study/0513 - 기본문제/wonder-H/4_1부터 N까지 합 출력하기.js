/*### 🐯 4. 1부터 N까지 합 출력하기
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

> 입력설명
첫 번째 줄에 20이하의 자연수 N이 입력된다.
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
