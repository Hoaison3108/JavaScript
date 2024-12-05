//Bài 21 WHILE TRUE
/*
 While true: tạo ra một vòng lặp vô tận. 
 khi sử dụng vòng lặp này, mã lệnh bên trong nó sẽ được thực thi
 liên tục mà không cần kiểm tra bất kỳ diều kiện nào
*/
let n = 0;
while (true) {
  n++;
  alert(n);
  if (n === 10) {
    break;
  }
}
