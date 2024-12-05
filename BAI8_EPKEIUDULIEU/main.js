//Bài 8: Ép kiểu dữ liệu
// Xuất thông báo nhập liệu
let numberA = prompt("Mời nhập số A: ");
/*Mặc định dữ liệu được nhập vào từ hàm Prompt là dạng string, 
cần ép kiểu để thực hiệ phép tính phù hợp*/
//check kiểu loại
console.log(typeof numberA);
//Thực hiện tính toán khi chưa ép kiểu
let numberB = 5;
//Cộng A vs B
let kq = numberA + numberB;
console.log(`kết quả A + B = ${kq}`);
console.log(typeof kq);
/*
    vd a=8, kết quả sẽ là 85 ->sai, js hiểu là cộng hai chuỗi với nhau
    các phép tính khác
*/
console.log(`A-B= %s`, numberA - numberB);
console.log(`A*B= %s`, numberA * numberB);
console.log(`A/B= %s`, numberA / numberB);
console.log(`A%B= %s`, numberA % numberB);

//ép kiểu dữ liêu nhập vào tư prompt
//parseInt - ép dữ liệu sang kiểu số nguyên
//parseFloat - ép dữ liệu sang kiểu số thực

let numberC = parseInt(prompt("Nhập vào số c: "));
console.log(numberC);
console.log(typeof numberC);

//Hoặc đơn giản dùng hàm Number() để ép kiểu -> ép sang kiểu number
let numberD = Number(prompt("Nhập vào số D: "));
console.log(numberD);
console.log(typeof numberD);
console.log(numberD + numberB);
