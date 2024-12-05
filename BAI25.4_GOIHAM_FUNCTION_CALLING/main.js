// Bài 25.4 Function Calling Other Function
/*
Trong js "Function Calling Other Function" là một khái niệm mà
một hàm có thể gọi một hoặc nhiều hàm khác để thực hiện các tác vụ cụ thể
Điều này giúp chia nhỏ chương trình thành các phần nhỏ, dễ quản lý và tái sử dụng


*/
//Hàm thực hiện phép cộng
function cong(a, b) {
  return a + b;
}
//Hàm thực hiện phép nhân
function nhan(x, y) {
  return x * y;
}
//Hàm gọi hàm
function congNhan(num1, num2, num3) {
  //gọi hàm cong để tính tổng
  let sum = cong(num1, num2);
  //Họi hàm nhan để tich sum * num3
  let product = nhan(sum, num3);
  return product;
}

//Sử dụng hàm congNhan
let result = congNhan(2, 3, 4);
console.log(result);
