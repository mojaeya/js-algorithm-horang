/*### π― 6. νμ
7κ°μ μμ°μκ° μ£Όμ΄μ§ λ, μ΄λ€ μ€ νμμΈ μμ°μλ€μ λͺ¨λ κ³¨λΌ κ·Έ ν©μ κ΅¬νλ νλ‘κ·Έλ¨μ μμ±νμΈμ.

> μλ ₯μ€λͺ
μμ°μ 7κ°κ° μ£Όμ΄μ§λ€. μ£Όμ΄μ§λ μμ°μλ 100λ³΄λ€ μλ€. νμκ° ν κ° μ΄μ λ°λμ μ‘΄μ¬νλ€.
> μΆλ ₯μ€λͺ
νμλ€μ ν©μ μΆλ ₯νλ€.
> μλ ₯μμ 
12 77 38 41 53 92 85
> μΆλ ₯μμ 
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

