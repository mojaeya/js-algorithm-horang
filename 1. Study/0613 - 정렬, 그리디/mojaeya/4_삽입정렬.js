console.log(insertionSort([11, 7, 5, 6, 10, 9]));

function insertionSort(array) {
  let j;
  for (let i = 1; i < array.length; i++) {
    temp = array[i]; // 선택한 숫자
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      // temp<array[j] => 왼쪽 요소와 비교해서 선택한 숫자(temp)보다 작으면 stop
      array[j + 1] = array[j]; // 한칸씩 뒤로 밀어냄
    }
    array[j + 1] = temp; // 마지막 빈칸에 temp 대입
    // console.log(array);
  }
  return array;
}

// 삽입 정렬은 왼쪽에서 오른쪽으로 가면서 각 요소들을 왼쪽 요소들과 비교하여 알맞은 자리에 삽입하는 형식의 정렬 방법
