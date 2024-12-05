// Bài 19 Switch Case
/*
Cú pháp:
    switch (biểu thức){
     case giá_trị1 :
      -> đoạn mã được thực thi nếu biểu_thức có giá trị là giá_trị1
     break;
     case giá_trị2 :
      -> đoạn mã được thực thi nếu biểu_thức có giá trị là giá_trị2
     break;
      -> các case khác ở đây
    default:
      -> đoan mã được thực thi nếu không có trường hợp nào khớp
    }

*/
let number = 2;
switch (number % 2) {
  case 0:
    console.log("Số chẵn");
    break;
  case 1:
    console.log("số lẽ");
    break;
  default:
    console.log("không phải số");
}
let month = parseInt(prompt("Nhập vào Tháng: "));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("tháng 30 ngày");
  case 2:
    console.log("có 28 hoặc 29 ngày");
    break;
  default:
    console.log("Không tồn tại");
}

/*
    Bài tập 14: Áp dụng Switch case 
    viết chương trình khung tìm kiếm: cho người dùng nhập vào lựa chọn
    1. tìm theo tên
    2. tìm theo tác giả
    3. tìm theo nhà xuất bản
    4. tìm theo tiêu đề
    thoát nếu phím bấm không hợp lệ

 */
//Cách xuất chuỗi xuống dòng
//cách 1
console.log("Sông cầu nước chảy lơ thơ \ncó đôi trai gái ngồi hơ quần đùi");
//Cách 2
alert(`
    chọn cách tìm kiếm:
    1. Tìm theo tên
    2. Tim theo tác giả
    3. Tìm theo nhà xuất bản
    4. Tìm theo tiêu đề
    `);

// Bài giải

//Hiển thị lựa chọn và nhập vào lựa chọn
let choice = parseInt(
  prompt(`
    chọn cách tìm kiếm:
    1. Tìm theo tên
    2. Tim theo tác giả
    3. Tìm theo nhà xuất bản
    4. Tìm theo tiêu đề
    `)
);
//so sánh điều kiện
switch (choice) {
  case 1:
    alert(" Bạn đã chọn theo tên");
    break;
  case 2:
    alert(" Bạn đã chọn theo tác giả");
    break;
  case 3:
    alert(" Bạn đã chọn theo nhà xuất bản");
    break;
  case 4:
    alert(" Bạn đã chọn theo tiêu đề");
    break;
  default:
    alert("Không hợp lệ");
}
