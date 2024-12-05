//Bài 17: Toán tử 3 ngôi - Ternary Operator
/*
    Cú pháp:
        Biến = Biểu thức 1 ? Biểu thức 2 : Biểu thức 3
    - Kiểm tra điều kiện, nếu TRUE thì thực hiện BThức 2, ngược lại FALSE thì thực hiện BThức 3
    - Bản chất rút gọn lệnh if..else

*/

let number = -10;
let message = number >= 0 ? "số dương" : "Số âm";
console.log(message);

let number2 = 14;
let message2 = number2 % 2 === 0 ? "Số chẵn" : "Số lẽ";
console.log(message2);

/*
    Bài tập 13: Viết chương tình nhập vào điểm trung bình và xuất ra kết quả xếp loại
    của học sinh theo tiêu chuẩn sau: (dùng toán tử 3 ngôi)
        - Giỏi: điểm >=8
        - Khá : điểm >=6.5 && điểm <8
        - Trung bình: điểm >=5 && điểm <6.5
        - Yếu : điểm<5
 */
let diem = parseFloat(prompt("Nhập vào điểm"));
if (!isNaN(diem) && diem >= 0 && diem <= 10) {
  let kq =
    diem >= 8 ? "Giỏi" : diem >= 6.5 ? "Khá" : diem >= 5 ? "Trung bình" : "Yếu";
  console.log(kq);
} else {
  console.log("Nhập điểm chưa đúng");
}
