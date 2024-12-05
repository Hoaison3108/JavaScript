//BÀI 25: FUNCTION (hàm) Tổng quan
/* 
1) Function
- khi muốn thực thi một đoạn code nào đó nhiều lần, thay vì phải copy đi copy lại đoạn code đó,
dẫn đến chương trình bị trùng lặp code
    => khi đo sta sử dụng hàm
    + Hàm là 1 khối lệnh thực hiện 1 công việc hoàn chỉnh (module)
        hàm còn được gọi là chương trình con
    + Công dụng:
        1. Chia nhỏ phân việc của dự án
        2. Tái sử dụng: khi cần chỉ cần gọi lại chương trình con mà không cần phải viết lại
2) Khai báo Function   
    + Bước thực hiện
        1. Khai báo hàm
            function teFunction(){
            // Mã lệnh thực hiện một nhiệm vụ
            }
        2. Gọi hàm - khi cần sử dụng
            tenFunction();
3) Function với tham số (parameters)
4) Gán biến cho hàm
        1. Về cơ bản console.log(value) cũng là 1 function được xây dựng sẵn bởi js
        -> console.log(value) sẽ hiện thị value mà người dùng truyền vào hiện lên cửa sổ console
        2. Number (value); 1 ví dụ khác, cũg là 1 function
5) Giá trị mặc định parameter
Chú ý: Thân hàm nếu không có return thì giá trị trả về là undefined 

*/

//Khai báo
function xinChao() {
  console.log("Chào mừng");
}

//Gọi Hàm
xinChao();

//3. Function với tham số parameter
//let inputName = prompt("Mời nhập tên");
//Khai báo hàm
function hello(name) {
  console.log(`chào mừng ${name}`);
}

//gọi hàm
//hello(inputName);

//vd2:
function tinhTong(a, b) {
  //   let kq = a + b;
  //   return kq;
  return a + b;
}

//gọi hàm
console.log(tinhTong(5, 7));
// Gán biến cho hàm (lưu giá trị trả về vào biến)
let diemToan = 8;
let diemVan = 9.5;
let tongDiem = tinhTong(diemToan, diemVan);
console.log(`tong điểm = ${tongDiem}`);
console.log(`DTB = ${tongDiem / 2}`);

//Chú ý: thân hàm nếu không có return thì giá trị trả về là undefine
//5. truyền giá trị mắc định cho parameter

console.log(tinhTong(10)); // trả về NaN
function tinhTong2(a = 0, b = 1) {
  //   let kq = a + b;
  //   return kq;
  return a + b;
}
console.log(tinhTong2(5)); // Nếu chỉ truyền vào 1 đối số thì đối số còn lại sẽ nhận giá trị mặc định đã khai báo trước đó
