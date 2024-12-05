// Bài 7: Xuất dữ liệu với biến trong js
let soA = 25;
let soB = 5;

//cách 1:
console.log("Căn bật hai của " + soA + " là: " + soB);

//cách 2:
console.log("Căn bật hai của", soA, "là:", soB);

//cách 3:
console.log(`Căn bậc hai của ${soA} là: ${soB}`);

//cách 4:
console.log(`Căn bậc hai của %s là %s`, soA, soB);

//Luyện tập
let a = 4, //ghi liên tiếp các biến thì có thể ngăn cách bằng dấu (,)
  b = 3,
  kq = a * b;
// Xuất kết quả theo 4 cách
//(1)
console.log("Kết quả: " + a + " nhân với " + b + " bằng " + kq);
//(2)
console.log("Kết quả:", a, "nhân với", b, "bằng", kq);
//(3)
console.log(`kết quả: ${a} nhân với ${b} bằng ${kq}`);
//(4)
console.log(`kết quả: %s nhân với %s bằng %s`, a, b, kq);
