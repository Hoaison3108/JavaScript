// Bài 11: Toán tủ Logic
/*
    && : Toán tử logic AND giữa 2 giá trị, trả vè TRUE khi cả 2 đều đúng
    || : Toán tử logic OR giữa 2 giá trị, trả về FALSE khi cả 2 đều sai
    ! : Toán tử NOT - Phép phủ định (đảo ngược giá trị)
 */

let i = 10;
// kiểm tra i>0 và i<10 không?
console.log(i > 0 && i < 10);
console.log(i > 0 || i > 10);
console.log(!(i < 10)); // phủ định ủa i<10 là i>10
/*
 Bài tập 4: Tính chu vi, diện tích hình tròn
 Viết chuong trình nhập vào từ bàn phím bán kính r đủa đường tròn, in ra kết quả 
    a) chu vi?
    b) dien tích?
  */
let PI = Math.PI; //Khai báo số PI dựa vào thư viện có sẵn
console.log(PI);

let r = Number(prompt("Nhập vào bán kính đường tròn: "));
let chuVi = 2 * PI * r;
let dienTich = PI * Math.pow(r, 2); //Bình phương
console.log("Chu vi là: " + chuVi);
console.log("Dien tích là: " + dienTich);

/*
Bài tập 5: Tính chu vi, diên tich hình chữ nhật
    1. Viết chương trình nhập vào 2 số thực dương a,b từ bàn phím 
    a là chiều dài, b là chiều rộng chữ nhật
    2. Xuất ra kết quả chu vi và diện tích hình chữ nhật
     gợi ý:
     diện tích s = a*b
     chu vi p = (a+b)*2
*/
let a = parseFloat(prompt("Nhập vào a: "));
let b = parseFloat(prompt("nhập vào b: "));
let s = a * b;
let p = (a + b) * 2;
console.log("diện tích chữ nhật là : " + s);
console.log("chu vi chữ nhật là: " + p);

/*
Bài tập 6: Viết chuong trình nhập vào điểm ba môn toán, văn, anh của một 
học sinh, tính điểm trung bình và xuất kết quả làm tròn 2 chữ số sau dấu phẩy
 number.toFixed(digits) : Phương thức định dạng số thập phân
    number: là số cần định dạng.
    digits: là số chữ số thập phân bạn muốn giữ lại (mặc định là 0 nếu không chỉ định).
*/
let diemToan = parseFloat(prompt("Nhập vào điểm Toán: "));
let diemVan = parseFloat(prompt("Nhập vào điểm Văn: "));
let diemAnh = parseFloat(prompt("nhập vào điểm Anh: "));
let dtb = (diemToan + diemVan + diemAnh) / 3;
console.log("Điểm Trung bình là: " + dtb.toFixed(2)); // Đinh dạng giữ lại 2 số thập phân sau dấu phẩy
