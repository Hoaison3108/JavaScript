//Bài 9: Toán tử gán
/*
    = : Gán bằng _ công thức: x =1 _ ý nghĩa: x =y
    += : Gán cộng _ công thức: x +=y _ ý nghĩa: x =x + y
    -= : Gán trừ _ công thức: x -=y _ ý nghĩa: x =x - y
    *= : Gán nhân _ công thức: x *=y _ ý nghĩa: x =x * y
    /= : Gán chia _ công thức: x /=y _ ý nghĩa: x =x / y
    %= : Gán chia lấy dư _ công thức: x %y _ ý nghĩa: x =x % y
*/

//1. toán tử Gán (=) dùng để gán giá trị cho biến
let x = 10; // biến x được gán giá trị là 10
let y = 5; // biến y được gán giá trị là 5
let z = x + y; // biên sz được gán giá trị là tổng của x + y
console.log(x);
console.log(y);
console.log(z);

// gán +=, -=, *=, /=, %=
console.log("kết quả gán +=, -=, *=, /=, %=");
let m = 10;
m += 5; // tương đương với m = m + 5;
console.log(m);

let n = 8;
n -= 3; // tương đương với n = n - 3;
console.log(n);

let p = 6;
p *= 2; //tương đương p = p *2;
console.log(p);

let q = 9;
q /= 3; //Tương đương q = q /3;
console.log(q);

let r = 4;
r %= 3; //tương dung r = %3;
console.log(r);

/* Bài tập 3: Thực hiện các phép toán gán và in ra kết quả
let a = 7;
a. thực hiện phép toán gán mở rộng để tăng giá trị của a lên 3 và in ra kết quả
Gợi ý; sử dụng toán tử +=
a += 3;
console.log("a= ",a);

b. b=15; b-=6
c. c=5; c*=4
d. d=12; d/=2
e. e=5; f=2 rút gọn biểu thức e = e-(f+1)
*/

//(b)
let b = 15;
b -= 6;
console.log(b);

//(c)
let c = 5;
c *= 4;
console.log(c);

//(d)
let d = 12;
d /= 2;
console.log(d);

//(e)
let e = 5,
  f = 2;
e -= f + 1;
console.log(e);
