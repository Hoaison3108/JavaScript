//Bài 16: Câu lệnh IF - ELSE - DEBUG
/*
  Cú pháp:
    if(Điều kiện){
        <Khối lệnh khi điều kiện đúng>;
    } else {
        <Khối lệnh khi điều kiện sai>;
    }
 */
let dtb = Number(prompt("Nhập vào số điểm: "));
if (dtb >= 5.0) {
  console.log("đã đỗ");
} else {
  console.log("đã trượt");
}
