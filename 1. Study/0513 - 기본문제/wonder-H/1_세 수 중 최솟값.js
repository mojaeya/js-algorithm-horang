/*### π― 1. μΈ μ μ€ μ΅μκ°
100μ΄νμ μμ°μ A, B, Cλ₯Ό μλ ₯λ°μ μΈ μ μ€ κ°μ₯ μμ κ°μ μΆλ ₯νλ νλ‘κ·Έλ¨μ μμ±νμΈμ. (μ λ ¬μ μ¬μ©νλ©΄ μλ©λλ€)*/

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
