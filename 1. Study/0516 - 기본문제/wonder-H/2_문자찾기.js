/* ### ๐ฏ 2. ๋ฌธ์ ์ฐพ๊ธฐ

ํ ๊ฐ์ ๋ฌธ์์ด์ ์๋ ฅ๋ฐ๊ณ , ํน์  ๋ฌธ์๋ฅผ ์๋ ฅ๋ฐ์ ํด๋น ํน์ ๋ฌธ์๊ฐ ์๋ ฅ๋ฐ์ ๋ฌธ์์ด์ ๋ช ๊ฐ ์กด์ฌํ๋์ง ์์๋ด๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.
> ์๋ ฅ์ค๋ช
์ฒซ ์ค์ ๋ฌธ์์ด์ด ์ฃผ์ด์ง๊ณ , ๋ ๋ฒ์งธ ์ค์ ๋ฌธ์๊ฐ ์ฃผ์ด์ง๋ค.
> ์ถ๋ ฅ์ค๋ช
์ฒซ ์ค์ ํด๋น ๋ฌธ์์ ๊ฐ์๋ฅผ ์ถ๋ ฅํ๋ค.
> ์๋ ฅ์์ 
COMPUTERPROGRAMMING
R
> ์ถ๋ ฅ์์ 
3
*/

const result = () => {
  const words = 'COMPUTERPROGRAMMING'
  let checkIndex = words.indexOf('R')
  let answer = 0;
  while (checkIndex !== -1) {
    answer = answer + 1
    checkIndex = words.indexOf('R', checkIndex + 1)
  }
  return answer;
}
console.log(result())