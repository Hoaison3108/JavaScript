//Bài 5.1 Khai báo biến & Khởi tạo biến
alert("check");
/*Hàm prompt: được sử dụng để hiển thị hộp thoại nhập liệu trên trình duyệt 
và chờ người dùng nhập một giá trị*/

//Hàm hiển thị hộp thoại nhập liệu
//prompt("Nhập họ và tên: ");

//Về cơ bản: dữ liệu vừa nhập vào sẽ biến mất và không được lưu vào bộ nhớ, để kưu trữ cần tạo biến.

// Khái niệm: biến là một ô nhớ trong bộ nhớ được đặt tên và sử dụng để luu trữ giá trị
// 3 từ khóa để khai báo biến: var, let và const
/*
    var : từ khóa khai báo biến trước ES6
    let : Từ khóa khai báo biến  được giới thiệu từ ES6\
    const : Khai báo hằng số, biến không thể thay đổi giá trị sau khi đã được gán

    + Khai báo biến/ khởi tạo biến: var tên_biến [=giá_trị]
     -khai báo biến
        var myName;
     -Khởi tạo biến
        var myName ="Trần Như Mộng";
        let yourName ="Mai Văn Đốt";
        const doSoi =100;
     - Xuất giá trị của biến
        console.log(myName);
        console.log(yourName);
        console.log(doSoi);
*/

//Khai báo biến (chưa có giá trị gọi là khai báo biến)
var myName;
let yourName;
//const doSoi; Const là 1 hằng số nên không thể khai báo mà phải khởi tạo cùng với giá trị lúc ban đầu

//Khởi tạo biến (có giá trị thì gọi là khởi tạo biến)
var diemToan = 10;
const doSoi = 100;
let fistName = "Alice";

//Xuất giá trị của biến
console.log(diemToan);
console.log("Điểm toán của bạn là: " + diemToan + " điểm");
console.log(doSoi);
console.log(fistName);

//Thay đổi giá trị của biến
diemToan = 5;
console.log("Điểm toán của bạn là: " + diemToan + " điểm");
fistName = "jacky";
console.log(fistName);

//Thử gán lại giá tri cho biến hằng số
// doSoi = 50;
// console.log(doSoi);
// Không thể gán lại giá trị mới cho cùng 1 tên biến hằng số

/* bài tập 1: Hãy viết chương trình, hiển thị thông báo lên trên màn hình, cho phép người dùng nhập tên.
Xuất tên cùng console.log
*/
let username = prompt("Nhập tên: ");
console.log("Tên của bạn là: " + username);
console.log("Chào mừng" + username + "đến với JavaScript");
