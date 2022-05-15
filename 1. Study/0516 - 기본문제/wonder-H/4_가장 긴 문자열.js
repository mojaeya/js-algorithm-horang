/* ### 🐯 4. 가장 긴 문자열
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

> 입력설명
N개의 문자열이 주어진다.  
각 문자열의 길이는 서로 다르다.
> 출력설명
가장 긴 문자열을 출력한다.

> 입력예제
teacher
time
student
beautiful
good
> 출력예제
beautiful
*/
(function longLength() {
  const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
  let longWord = '';
  for (const word of arr) {
    word.length > longWord.length ? longWord = word : console.log(word.length, longWord.length)
  }
  return console.log('result : ', longWord);
})();