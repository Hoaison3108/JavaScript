//Bài 7.2 Các phép toán cơ bản trong JS (+, -, *, /, %(chia lấy dư))
let a = 5;
let b = 2;

let tong = a + b; //tong = 7
let hieu = a - b; //hiệu = 3
let tich = a * b; //tích = 10
let thuong = a / b; //Thương =2.5
let soDu = a % b; //chia lây dư, dư = 1

/*
    + Giống với toán học thông thường, nhân chia trước, cộng trừ sau
    + Đối với các phép toán phức tạp, dùng ngoặc () để thể hiện sự ưu tiên
*/

// xuất kết quả
console.log("Tổng: " + tong);
console.log("Hiệu: " + hieu);
console.log("Tích: " + tich);
console.log("Thương: " + thuong);
console.log("Dư của phép chia: " + soDu);
