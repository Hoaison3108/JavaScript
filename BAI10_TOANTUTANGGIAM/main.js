//Bài 10: Toán tử tăng giảm (++ --) tiền tố, hậu tố (prefix. postfix)
// ++ tăng giá trị lên 1 _ ex: a=1, a++ _ kết quả a=2
// -- giảm giá trị đi 1 _ex: a=1, a--_ két quả a=0
let a = 99,
  b = 10,
  c = 77,
  d = 88;
a++;
b--;
++c;
--d;
//xuất kết quả
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/*
    + Quy tắc viết dấu ++, --
        ++a, --a (viết trước biến) => Prefix
        a++, a-- (viết phái sau biến) => Postfix
     
    + Ưu tiên tính toán Postfix, Prefix
        1. prefix
        2. các phép tính còn lại
        3. gán giá trị cho biến ở bên trái dấu bằng
        4. tính postfix
*/

//Trường hợp phức tạp
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x);
console.log(y);
console.log(z);

/*
    (1): ++y => y=3
    (2): x=1, y=3 => 1-3+1 =-1
    (3): z=-1
    (4); x++ => x=2
*/
