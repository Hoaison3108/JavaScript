// //Bài 16

// /*Bài tập 7: tìm x, y khi biết tổng và hiệu của chúng
// test 1 : Tổng 14 , hiệu 4 => x =9, y =5
// test 2 : tổng 8, hiệu 5 => x=6.5, y=1.5
// Gợi ý:
//     x + y = tong
//     x - y = hieu

//     cách giải: cộng 2 vế
//     => 2x = tong + hieu
//     => x = (tong + hieu)/2
//     => x
//     => y = x - hieu
//     => y
// */
// let tong = Number(prompt("Nhập tong: "));
// let hieu = Number(prompt("Nhập hieu: "));

// let x = (tong + hieu) / 2;
// let y = x - hieu;

// //xuất kết quả
// console.log("giá trị x: " + x);
// console.log("giá trị y: " + y);

// /*
//     Bài tập 8: Viết chương trình nhập vào chiều cao, cân nặng
//     tính BMI và xuất ra thông báo
//     BMI < 15: quá gầy
//     BMI >=15 &&  BMI <16: gầy
//     BMI >=16 && BMI <18.5 : hơi gầy
//     BMI >=18.5 && BMI <25 : bình thường
//     BMI >=25 && BMI <30 : hơi béo
//     BMI >=35 : quá béo
//     Công thức: BMI = canNang/(chieuCao^2)
// */
// let chCao = Number(prompt("Nhập chiều cao: "));
// let canNang = Number(prompt("Nhập cân Nặng: "));
// let BMI = canNang / Math.pow(chCao, 2);
// console.log("Chỉ số BMI " + BMI.toFixed(1));
// if (BMI < 15) {
//   console.log("Quá Gầy");
// } else if (BMI > 15 && BMI < 16) {
//   console.log("Gầy");
// } else if (BMI >= 16 && BMI < 18.5) {
//   console.log("Hơi Gầy");
// } else if (BMI >= 18.5 && BMI < 25) {
//   console.log("Bình Thường");
// } else if (BMI >= 25 && BMI < 30) {
//   console.log("Hơi Béo");
// } else if (BMI >= 30 && BMI < 35) {
//   console.log("Béo");
// } else if (BMI >= 35) {
//   console.log("Quá Béo");
// }

// /*
//     Bài tập 9: Viết chương trình nhập vào 1 năm dương lịch
//     kiểm tra năm đó có phải năm nhuận hay không
//     Gợi ý: Năm nhuận là năm
//     (chia hết cho 4 và không chia hết cho 100) hoặc (chia hết cho 400)
//     ((nam %4 === 0)&&(nam %100 !==0)) || (nam %400 === 0)
//     test năm nhuận: 2004, 2008, 2013, 2016, 2020, 2024
//         Năm ko nhuận: 1900, 2005, 2025
//  */
// let nam = Number(prompt("Nhập vào Năm: "));
// if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
//   console.log(" Năm " + nam + " là năm Nhuận");
// } else {
//   console.log(`Năm ${nam} là năm không nhuận`);
// }

// /*
//     Bài 10: Viết chương trình cho người dùng nhập vào 1 tháng bất kỳ
//     từ 1 đến 12.
//     => cho biết tháng đó có bao nhiêu ngày
//     gợi ý:
//     + Tháng 1,3,5,7,8,10,12 có 31 ngày
//     + Tháng 4,6,9,11 có 30 ngày
//     + Nếu tháng 2 năm nhuận thì có 29 ngày
//     + Nếu tháng 2 năm không nhuận thì có 28 ngày
// */
// let thang = parseInt(prompt("Nhập tháng: "));
// if (!isNaN(thang) && thang >= 1 && thang <= 12) {
//   if ([1, 3, 5, 7, 8, 10, 12].includes(thang)) {
//     //dùng phuong thức includes()để kiểm tra có nằm trong mảng hay ko
//     console.log(`Tháng ${thang} có 31 ngày`);
//   } else if ([4, 6, 9, 11].includes(thang)) {
//     console.log(`Tháng ${thang} có 30 ngày`);
//   } else if (thang === 2) {
//     let nam = parseInt(prompt("Vui lòng nhập năm"));
//     // kiểm tra năm nhuận
//     if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
//       console.log("Năm Nhuận tháng " + thang + " có 29 ngày");
//     } else {
//       console.log("Năm không nhuận tháng " + thang + " có 28 ngày");
//     }
//   }
// } else {
//   console.log("Tháng ko hợp lệ, nhập lại");
// }

/*
    Bài 11: Viết chương trình giải phương trình bậc 2
    ax^2 + bx + c =0
    Gợi ý: 
    delta = b^2 - 4ac
    delta > 0 phương trình có 2 nghiệm phân biệt
        x1 = (-b + căn delta) / 2a
        x2 = (-b - căn delta) / 2a
    delta = 0 phương trình có 1 nghiệm kép
        x = -b/2a
    delta < 0 phương trình vô nghiệm

    test a = 1, b=2, c =-3
    pt có 2 nghiệm x1 = 1; x2= -3

*/
// let a = parseFloat(prompt("Nhập vào a: "));
// let b = parseFloat(prompt("Nhập vào b: "));
// let c = parseFloat(prompt("Nhập vào c: "));
// //Kiểm tra dữ liệu nhập vào có phải là số
// if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
//   //Tính delta
//   //let delta = Math.pow(b, 2) - 4 * a * c;
//   let delta = b ** 2 - 4 * a * c;
//   //TH: 2 nghiệm
//   if (delta > 0) {
//     // Tìm nghiệm x1, x2
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2} `);

//     // TH: nghiệm kép
//   } else if (delta === 0) {
//     // tìm nghiệm kép
//     let x = -b / (2 * a);
//     console.log(`Phương trình có nghiệm kép ${x}`);

//     // TH; Vô nghiệm
//   } else if (delta < 0) {
//     console.log(`Phương trình vô nghiệm`);
//   }
// } else {
//   console.log("vui lòng nhập vào số");
// }

/*
    Bài tập 12: Viết chương trình nhập vào tháng trong năm
    cho biết tháng đó thuộc quý mấy
    Gợi ý: 
    + Quý I: tháng 1, 2, 3
    + Quý II: tháng 4,5,6
    + Quý III: tháng 7,8,9
    + Quý IV: tháng 10,11,12
*/
let month = parseInt(prompt("Nhập vào Tháng"));
if (!isNaN(month) && month > 0 && month <= 12) {
  if ([1, 2, 3].includes(month)) {
    console.log(`Thang ${month} thuộc Quý I`);
  } else if ([4, 5, 6].includes(month)) {
    console.log(`Thang ${month} thuộc Quý II`);
  } else if ([7, 8, 9].includes(month)) {
    console.log(`Thang ${month} thuộc Quý III`);
  } else if ([10, 11, 12].includes(month)) {
    console.log(`Thang ${month} thuộc Quý IV`);
  }
} else {
  console.log("Vui Lòng nhập vào số tháng đúng");
}
