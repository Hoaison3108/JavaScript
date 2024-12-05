//Bài 27.2 Hoisting trong js Function - Hướng dẫn chi tiết js
/*
1. Function Declaration 
    - Có hoisting. Có thể gọi hàm trước khi nó được định nghĩa
2. Function Expression, Arrow Function
    - Không có hoisting. Phải gọi hàm sau khi đã định nghĩa


*/
hoistedFunction();
function hoistedFunction() {
  console.log("hello");
}
//Cách trình duyệt đọc
function hoistedFunction() {
  console.log("hello");
}
hoistedFunction();
