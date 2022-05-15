/* ### 🐯 2. 문자 찾기

한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
> 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
> 출력설명
첫 줄에 해당 문자의 개수를 출력한다.
> 입력예제
COMPUTERPROGRAMMING
R
> 출력예제
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