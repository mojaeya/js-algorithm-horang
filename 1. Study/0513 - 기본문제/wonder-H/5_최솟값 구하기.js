/*### ๐ฏ 5. ์ต์๊ฐ ๊ตฌํ๊ธฐ
7๊ฐ์ ์๊ฐ ์ฃผ์ด์ง๋ฉด ๊ทธ ์ซ์ ์ค ๊ฐ์ฅ ์์ ์๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์..

> ์๋ ฅ์ค๋ช
์ฒซ ๋ฒ์งธ ์ค์ 7๊ฐ์ ์๊ฐ ์ฃผ์ด์ง๋ค.
> ์ถ๋ ฅ์ค๋ช
์ฒซ ๋ฒ์งธ ์ค์ ๊ฐ์ฅ ์์ ๊ฐ์ ์ถ๋ ฅํ๋ค.
> ์๋ ฅ์์ 
5 3 7 11 2 15 17
> ์ถ๋ ฅ์์ 
2
*/

const arrayMin = [];

for (let i = 0; i < 7; i += 1) {
  arrayMin.push(randomNum1000())
}

function randomNum1000() {
  min = Math.ceil(1);
  max = Math.floor(1000);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  return randomNum;
}

const result5 =
  arrayMin.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    else {
      return 0;
    }
  })

console.log('result5 : ', result5[0]);
