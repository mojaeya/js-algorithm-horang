/* ### 🐯 7. 중복단어제거
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.출력하는 문자열은 원래의 입력순서를 유지합니다.

> 입력설명
N개의 문자열이 주어진다.
> 출력설명
중복이 제거된 문자열을 차례로 출력한다.
> 입력예제
html
html
css
javascript
> 출력예제
html
css
javascript
*/
const arr = ['html', 'html', 'css', 'javascript']
console.log(Array.from(new Set(arr)))