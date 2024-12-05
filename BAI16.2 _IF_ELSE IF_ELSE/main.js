//Bài 16.2 : Câu lệnh IF - ELSE IF -ELSE
/*
  Cú pháp:
    if(Điều kiện){
        <Khối lệnh khi điều kiện 1>;
    } else if{
        <Khối lệnh khi điều kiện 2>;
    }
        else if{
        <Khối lệnh khi điều kiện 3>;
    }
        else if{
        <Khối lệnh khi điều kiện 4>;
    }
 */
/*
  nhập vào điểm tb, in ra kết quả xếp loại của học sinh
  Giỏi: dtb <=10 và dtb >=8
  Khá : 8 > dtb > 6.5
  TB : 6.5 > dtb >=5
  Yếu : 0<= dtb <5  
*/
let dtb = Number(prompt("Nhập vào ĐTB: "));
if (dtb >= 8 && dtb <= 10) {
  console.log("Loại Giỏi");
} else if (dtb <= 8 && dtb >= 6.5) {
  console.log("loại Khá");
} else if (dtb <= 6.5 && dtb >= 5) {
  console.log("Loại TB");
} else if (dtb >= 0 && dtb < 5) {
  console.log("Loại Yếu");
} else {
  alert("Nhập không đúng, vui lòng nhập lại");
}
