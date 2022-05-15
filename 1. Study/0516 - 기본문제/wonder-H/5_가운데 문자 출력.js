/* ### 🐯 5. 가운데 문자 출력
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

> 입력설명
첫 줄에 문자열이 입력된다.
> 출력설명
첫 줄에 가운데 문자를 출력합니다.
> 입력예제
study
good
> 출력예제
u
oo
*/

function returnCenter(word) {
  let result = Math.floor(word.length / 2);
  return word.length % 2 === 1 ? console.log(word[result]) : console.log(word.slice(result - 1, result + 1))
};
returnCenter('study'); returnCenter('good')