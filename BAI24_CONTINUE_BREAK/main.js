//Bài 24: Sử dụng Continue và Break để kiểm soát vòng lặp trong JS
/*
    Cách dùng:
     - Break; thường được dùng để thoát khỏi 1 vòng lặp
     - Continue; dùng để bỏ qua 1 giá trị trong vòng lặp

*/
//BREAK
let n = 0;
while (n < 100) {
  n++;
  if (n === 4) {
    break; // dùng để thoát khỏi vòng lặp
  }
  console.log(n);
}

//CONTINUE
let i;
for (i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; //bỏ qua giá trị trong vòng lặp
  } else {
    console.log(i);
  }
}
