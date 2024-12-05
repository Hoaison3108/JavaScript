//Bài 20: Vòng lặp While - While Loop
/*
Vòng lặp while trong lập trình được sử dụng để lặp lại
một đoạn mã miễn là điều kiện cho trước đúng.
Cú pháp: 
 While (condition){
    -> code được thực thi trong vòng lặp
    -> khi condition trở thành FALSE, vòng lặp sẽ dừng 
 }

 */
let i = 1;
while (i <= 5) {
  console.log(i);
  i++; //i= i + 1;
}
/*
   ví dụ thực hành : viết chương trình nhập vào số n từ bàn phím n phải là 
   số nguyên nằm trong khoảng từ 1 đến 99 nhập sai bắt nhập lại
*/
let n = prompt("nhập vào số nguyên n từ 1 đến 99");
console.log(n);
while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(prompt("Số bạn nhập không hợp lệ vui lòng nhập lại n "));
}
alert("bạn đã nhập số n: " + n);
