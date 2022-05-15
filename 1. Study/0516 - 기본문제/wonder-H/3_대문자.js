/* ### 🐯 3. 대문자

(1) 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.  
(2) 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.  
(3) 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

> 입력설명
문자열이 입력된다.
> 출력설명
(1) 대문자의 개수를 출력한다.  
(2) 대문자로 통일된 문자열이 출력된다.  
(3) 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.

> 입력예제
JavaScriptAlgorithmHorangStudy
> 출력예제
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
