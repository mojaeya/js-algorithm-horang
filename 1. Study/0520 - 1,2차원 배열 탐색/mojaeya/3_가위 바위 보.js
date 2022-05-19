let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];
console.log(gawibawibo(5, A, B));

function gawibawibo(N, a, b) {
  for (let i = 0; i < N; i++) {
    switch (a[i]) {
      case 1: // A: 가위
        switch (b[i]) {
          case 1:
            console.log("D");
            break;
          case 2:
            console.log("B");
            break;
          case 3:
            console.log("A");
            break;
        }
        break;
      case 2: // A: 바위
        switch (b[i]) {
          case 1:
            console.log("A");
            break;
          case 2:
            console.log("D");
            break;
          case 3:
            console.log("B");
            break;
        }
        break;
      case 3: // A: 보
        switch (b[i]) {
          case 1:
            console.log("B");
            break;
          case 2:
            console.log("A");
            break;
          case 3:
            console.log("D");
            break;
        }
        break;
    }
  }
}
