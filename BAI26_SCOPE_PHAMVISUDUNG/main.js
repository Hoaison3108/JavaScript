//Bài 26: Phạm vi sử dụng (Scope) trong js - phân biệt Global, Function và Block Scope trong js
/*I) Scope
    - Phạm vị sử dụng (Scope):
    Xác định nơi mà một biến có thể được truy cập hoặc sử dụng
        1. global scope: phạm vi toàn cục truy xuất dc ở một nơi
        2. function-scope: phạm vi của hàm
        3. block-scope: phạm vi của khối ( block)
        chẳng hạn như trong một if statement hoặc vòng lặp
  II) Phạm vi hàm (function Scope)
    biến được khai báo bên trong thân hàm
  III) Block Scope
    phạm vi block {} (Block Scope):
    biến được khai báo bên trong khối {}
    - Phạm vi sử dụng là một cách quan trọng để tránh xung đột tên biến
    -Note: Với const, let thì biến truy xuất dc, nếu cùng cấp hoặc từ phạm vi thấp hơn
*/
//1. Global Scope
let a = 1;
//truy xuất thử biến a
console.log(a);

function viDu_1() {
  //có thể truy xuất biến Global trong hàm
  console.log(a);
  // thử với phạm vi block scope
  if (a % 2 === 0) {
    console.log(`${a} là số lẻ`);
  } else {
    console.log(`${a} không là số lẻ`);
  }
}
//gọi hàm
viDu_1();

//2.Function Scope
function viDu_2() {
  let b = 2;
  //Biến b chỉ có thể truy xuất trong hàm
  console.log(b);
  //Có thể truy xuất dc từ các cấp sâu hơn bên trong
  if (b % 2 === 0) {
    console.log(`${b} là số chẵn`);
  } else {
    console.log(`${b} là số lẻ`);
  }
}
//ngoài hàm
//console.log(b); //báo lỗi dob chưa được định nghĩa

//3.Block Scope
let n = 3;
if (n === 3) {
  let m = 1;
  console.log(m);
  if (m % 2 === 0) {
    console.log(`${m} là số chẵn`);
  } else {
    console.log(`${m} là số lẻ`);
  }
}
