//Bài 27 Js Hoisting so sánh var - let - const
/*I) JS Hoisting
    Hoisting (nâng cao): là hành vi của js nhằm di chuyển tất cả các hai báo lên đầu
phạm vi hiện tại(lên đầu tập lệnh hiện tại, hoặc hàm hiện tại, lên đầu block hiện tại)
    1. var: Được nâng cao (hoisted) - lên đầu tập lệnh hiện tại, hoặc làm hiện tại, 
có thể sử dụng trước khi nó được khai báo trong mã lệnh.
    2. let, const: Cũng được nâng cao (hoisted) lên đầu phạm vi block scope
tuy nhiên biến sẽ nằm trong vùng temporal dead zone- không thể sử dụng biến 
trước khi nó được khai báo
  II) So sánh var >< let
    a. var: có phạm vi là function scope:
        - Nếu môt biến được khai báo bằng var, phạm vị của nó
        sẽ là phạm vi của hàm (function)
        - Biến sẽ được đẩy lên đầu phạm vi Function Scope
    b. let, const (ES6): có phạm vi block scope
        - Nếu một biến được khai báo bằng let, const
        phạm vi của nó sẽ là phạm vi block
        - Biến sẽ được đẩy lên đầu phạm vi BlockScope
  III) Re-declaration (Khai báo lại)
    - var: Có thể khai báo lại một biến sử dụng var mà không gây ra lỗi
    - let: Không thể khai báo lại một biến sử dụng let trong cùng một phạm vi
*/

//1/ var
console.log("giá trị c = " + c); //Nhận về giá trị undefined do js tư nhận khai báo var c chưa có giá trị
//khởi tạo
var c = 9;
// Cách js đọc chương trình
/*
Hoisting là hiện tượng js đẩy khai báo lên đầu phạm vi hiện tại
var c;
console.log("giá trị c = " + c);
c = 9;
*/

//1/ let & const
//console.log("giá trị c = " + d);
//khởi tạo
//let d = 9; //Uncaught ReferenceError: Cannot access 'd' before initialization

//2/ var; có phạm vi là function-Scope
function exampleVar() {
  if (true) {
    var y = 20; //khởi tạo y nằm trong phạm vi block scope
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong block scope`);
}
exampleVar();

//jS hiểu
function exampleVar() {
  var y; //hoisting
  if (true) {
    y = 20; //khởi tạo y nằm trong phạm vi block scope
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong block scope`);
}
exampleVar();
//2/let, const có phạm vi block scope
function exampleLet() {
  if (true) {
    let b = 40;
    console.log(`${b} trong block scope `);
  }
  console.log(`${b} trong block scope `); //Không thể truy cập b từ bên ngoài if, sẽ gây lỗi
}
//gọi ham
exampleLet();
//3/Re -declaration
var diemToan = 4;
var diemToan = 8; // ghi đè lại giá trị diemToan, ko báo lỗi, cho phép tồn tại 2 biến giống nhau trong 1 phạm viS

// let diemVan = 7;
// let diemVan = 8; //Báo lỗi không có phép tôn tại 2 biến giống nhau trong cũng 1 phạm vi
