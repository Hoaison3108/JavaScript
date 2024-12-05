//Bài 28: Đệ quy với js - Hướng dẫn Đệ quy chi tiết
/*
    I) Đề quy
        - Đệ quy là cách dùng hàm để tự gọi lại chính nó
        - Đề giải bằng đệ quy cần 2 điều kiện:
            1. Điểm dừng của bài toán
            2. Quy luật của bài toán
        vd 1: tính N! = N*(N-1)!....1
        - Quy luậtL 5! = 5*4!
                    4! = 4*3! => n!=n*(n-1)!
        - Điểm dừng: n=0, hoặc n=1 giai thừa luôn bằng 1
        vd 2: Dãy Fibonacci:F1=1,F2=1,Fn=F(n-1)+F(bn-2)
        - Quy luật: Fn=F(n-1)+F(n-2)
        - Điểm dừng: n<=2 thì F(n)=1

*/
//VD1: Giai thừa
function giaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

//gọi hàm
let kq = giaiThua(5);
console.log(kq);

//VD2: Fibonacci
function f(n) {
  if (n <= 2) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}

//Gọi hàm
let kq2 = f(10);
console.log(kq2);
