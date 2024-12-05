//Bài 25.5 Giải bài tập 22 & 23
/*bài tập 22: 
Sử dụng function - viết chương trình nhập vào số nguyên n,
in ra kết quả n!
- dùng vòng lặp For
- dùng vòng lặp While
*/
/*
let n = Number(prompt("Nhập vào số nguyên không âm"));
// Kiểm tra tính hợp lệ của n
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Nhập vào số nguyên không âm"));
}
//1. dùng vòng lặp for
let gt = 1;
for (let i = 1; i <= n; i++) {
  console.log(i);
  gt *= i;
}
console.log(n + "! = " + gt);
*/
function tinhGiaiThuaFor(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}
let n = Number(prompt("Nhập vào số nguyên không âm"));
// Kiểm tra tính hợp lệ của n
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Nhập vào số nguyên không âm"));
}
let kqFor = tinhGiaiThuaFor(n);
console.log(`${n}! sử dụng for = ${kqFor}`);

//2. dùng vòng lặp While
function tinhGiaiThuaWhile(n) {
  let gt = 1;
  let i = 1;
  while (i <= n) {
    gt *= i;
    i++;
  }
  return gt;
}
let kqWhile = tinhGiaiThuaWhile(n);
console.log(`${n}! sử dụng for = ${kqWhile}`);

/*Bài tập 23: 
Sử dụng Function viết chương trình 
giải phương trình bậc 2: ax^2 + bc + c=0
a) a=1, b=2, c=-3
=> Pt có 2 nghiệm x1 = 1 và x2 =-3
b) a =1, b=2, c=1
=> Pt có nghiệm kép x1=x2 =-1
c) a=1, b=1, c=1
=> Pt vô nghiệm
*/
//Cách 1: Function Declaration
function ptb2_1(a, b, c) {
  //tính delta
  let delta = b ** 2 - 4 * a * c;
  // kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("pt có 2 nghiệm: " + x1 + " & " + x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("pt cos nghiem kep" + x1);
  } else {
    console.log("pt vô nghiệm");
  }
}
//Gọi hàm
ptb2_1(1, 2, -3);
ptb2_1(1, 2, 1);
ptb2_1(1, 1, 1);

//Cách 2: Function Expression
let ptb2_2 = function (a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  // kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("pt có 2 nghiệm: " + x1 + " & " + x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("pt cos nghiem kep" + x1);
  } else {
    console.log("pt vô nghiệm");
  }
};
//Gọi hàm
ptb2_2(1, 2, -3);
ptb2_2(1, 2, 1);
ptb2_2(1, 1, 1);

//Cách 3: Arrow Function
let ptb2_3 = (a, b, c) => {
  let delta = b ** 2 - 4 * a * c;
  // kiểm tra delta
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("pt có 2 nghiệm: " + x1 + " & " + x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("pt cos nghiem kep" + x1);
  } else {
    console.log("pt vô nghiệm");
  }
};
//Gọi hàm
ptb2_3(1, 2, -3);
ptb2_3(1, 2, 1);
ptb2_3(1, 1, 1);
