/* ### ๐ฏ 4. ๊ฐ์ฅ ๊ธด ๋ฌธ์์ด
N๊ฐ์ ๋ฌธ์์ด์ด ์๋ ฅ๋๋ฉด ๊ทธ ์ค ๊ฐ์ฅ ๊ธด ๋ฌธ์์ด์ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.

> ์๋ ฅ์ค๋ช
N๊ฐ์ ๋ฌธ์์ด์ด ์ฃผ์ด์ง๋ค.  
๊ฐ ๋ฌธ์์ด์ ๊ธธ์ด๋ ์๋ก ๋ค๋ฅด๋ค.
> ์ถ๋ ฅ์ค๋ช
๊ฐ์ฅ ๊ธด ๋ฌธ์์ด์ ์ถ๋ ฅํ๋ค.

> ์๋ ฅ์์ 
teacher
time
student
beautiful
good
> ์ถ๋ ฅ์์ 
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