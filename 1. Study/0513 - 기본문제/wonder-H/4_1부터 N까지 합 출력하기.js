/*### ๐ฏ 4. 1๋ถํฐ N๊น์ง ํฉ ์ถ๋ ฅํ๊ธฐ
์์ฐ์ N์ด ์๋ ฅ๋๋ฉด 1๋ถํฐ N๊น์ง์ ํฉ์ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.

> ์๋ ฅ์ค๋ช
์ฒซ ๋ฒ์งธ ์ค์ 20์ดํ์ ์์ฐ์ N์ด ์๋ ฅ๋๋ค.
> ์ถ๋ ฅ์ค๋ช
์ฒซ ๋ฒ์งธ ์ค์ 1๋ถํฐ N๊น์ง์ ํฉ์ ์ถ๋ ฅํ๋ค.
> ์๋ ฅ์์ 
6
> ์ถ๋ ฅ์์ 
21
*/

function randomNum10() {
  min = Math.ceil(1);
  max = Math.floor(20);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

function sum(num) {
  let result = 0;
  let i = 0;
  do {
    i = i + 1;
    result = result + i;
  } while (i < num);
  return result;
}

console.log('result4 : ', sum(randomNum10()));
