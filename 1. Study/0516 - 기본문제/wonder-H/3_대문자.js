/* ### π― 3. λλ¬Έμ

(1) λ¬Έμμ΄μ μλ ₯λ°μ ν΄λΉ λ¬Έμμ΄μ μνλ²³ λλ¬Έμκ° λͺ κ° μλμ§ μμλ΄λ νλ‘κ·Έλ¨μ μμ±νμΈμ.  
(2) λ¬Έμμ΄μ μλ ₯λ°μ λλ¬Έμλ‘ λͺ¨λ ν΅μΌνμ¬ λ¬Έμμ΄μ μΆλ ₯νλ νλ‘κ·Έλ¨μ μμ±νμΈμ.  
(3) λ¬Έμμ΄μ μλ ₯λ°μ λλ¬Έμλ μλ¬Έμλ‘ μλ¬Έμλ λλ¬Έμλ‘ λ³ννμ¬ μΆλ ₯νλ νλ‘κ·Έλ¨μ μμ±νμΈμ.

> μλ ₯μ€λͺ
λ¬Έμμ΄μ΄ μλ ₯λλ€.
> μΆλ ₯μ€λͺ
(1) λλ¬Έμμ κ°μλ₯Ό μΆλ ₯νλ€.  
(2) λλ¬Έμλ‘ ν΅μΌλ λ¬Έμμ΄μ΄ μΆλ ₯λλ€.  
(3) λλ¬Έμλ μλ¬Έμλ‘, μλ¬Έμλ λλ¬Έμλ‘ λ³νλ λ¬Έμμ΄μ μΆλ ₯ν©λλ€.

> μλ ₯μμ 
JavaScriptAlgorithmHorangStudy
> μΆλ ₯μμ 
    (1) 5
    (2) JAVASCRIPTALGORITHMHORANGSTUDY
    (3) jAVAsCRIPTaLGORITHMhORANGsTUDY
*/

const words = 'JavaScriptAlgorithmHorangStudy'
//1
console.log(words.match(/[A-Z]/g).length)
//2
console.log(words.toUpperCase())
//3
let result = '';
(function changeCase() {
  for (const i of words) {
    i === i.toUpperCase() ? result += i.toLowerCase() : result += i.toUpperCase()
  }
  return console.log(result)
})();
