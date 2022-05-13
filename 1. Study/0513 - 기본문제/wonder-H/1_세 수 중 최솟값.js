/*### 🐯 1. 세 수 중 최솟값
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요. (정렬을 사용하면 안됩니다)*/

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
console.log('result1 : ', minNumber(randomNum100(), randomNum100(), randomNum100()));
