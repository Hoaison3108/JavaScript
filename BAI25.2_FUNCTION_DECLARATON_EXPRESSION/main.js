//Bài 25.2 Function Declaration & Function Expression & Function Arrow Function
/*
1. Function Declaration (Khai báo tường minh)
  cú pháp:
    function tenFunction(parameters){
      //Thân hàm
      //return something;
    }
2. Function Expression ()
  cú pháp:
    let ten_bien = function (parameters){
      //Thân hàm
      // return something;
    };
3. Arrow function (hàm mũi tên)
là một cú pháp viết ngắn gọn của hàm trong js, được giới thiệt trong ES6
giúp viết mã ngắn gọn và có cú pháp rõ ràng hơn
    let multiArrow = (a, b) => a * b;
    với các biểu thức đơn giản, Cú pháp sẽ ngắn gọn hơn nhiều 
    mà không cần dùng keyword return

*/
//1
//Khai báo hàm
function tong(a = 0, b = 0) {
  return a + b;
}
//gọi Hàm
console.log(tong(5, 3));

//2 fun Expression
//khai báo
let tich = function (a, b) {
  return a * b;
};
//gọi hàm
console.log(tich(3, 5));

//Fun Expression
let multiply = function (a, b) {
  return a * b;
};
//Gọi hàm
console.log(multiply(5, 4));

//Arrow fun
let multiplyArrow = (a, b) => a * b;
//gọi hàm
console.log(multiplyArrow(5, 5));

//Tuy nhiên với trường hợp phúc tạp, cần thêm khối {}
//Fun Expression
let multiplyAndAdd = function (a, b) {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

//Arrow Fun
let multiplyAndAddArrow = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

//gọi hàm
console.log(multiplyAndAdd(3, 5));
console.log(multiplyAndAddArrow(3, 5));
