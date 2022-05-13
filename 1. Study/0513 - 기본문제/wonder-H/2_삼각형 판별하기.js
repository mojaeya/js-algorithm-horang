/**### 🐯 2. 삼각형 판별하기
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

-> 가장 긴 막대기 1개 < 다른 두 개의 합
*/

function randomNum100() {
  min = Math.ceil(1);
  max = Math.floor(100);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

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

console.log('result2 : ', checkLength(randomNum100(), randomNum100(), randomNum100()));


