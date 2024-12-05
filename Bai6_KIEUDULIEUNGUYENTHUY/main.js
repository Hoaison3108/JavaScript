//Bài 6: Primitive Data Types trong Js (Các kiểu dữ liệu nguyên thủy)
/*
    + String : kiểu chuỗi - kiểu dữ liệu để lưu trữ chuỗi ký tự - ex: let myString = "Xin chào"
    + Number : kiểu số - kiểu dữ liệu để lưu trữ số, có thể là số nguyên hoặc số thực - ex: let soNguyen = 10; let soThuc = 3,14;
    + Boolean : kiểu lý luận, chỉ có thể nhận giá trị true hoặc false - ex: let isTrue = true; let isFalse = false;
    + Undefined : biến chưa được gán giá trị sẽ có kiêu dữ liệu là underfined - ex: let underfinedVariable;
    + Null : biến được gán giá trị là null, thường dùng để reset biến, gán giá trị mặc định... - ex: nullVallue = null;
*/
// Kiểu String
let myString = "abc";
console.log(myString);
console.log(typeof myString);

// Kiểu Number
let soNguyen = 10;
let soThuc = 3.14;
//xuất giá trị
console.log(soNguyen);
console.log(soThuc);
console.log(typeof soNguyen);
console.log(typeof soThuc);

//Kiểu Boolean
let check = true;
console.log(typeof check);

//kiểu undefined
let diemToan;
console.log(typeof diemToan);

//kiểu Null
let connect = null;
console.log(typeof connect);

//xuất số nguyên an toàn tối đa
console.log("Số nguyên an toàn tối đa: " + Number.MAX_SAFE_INTEGER);
