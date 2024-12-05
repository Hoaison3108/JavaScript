//Bài 14: hàm Number, IsNan và Number.isNaN
/*
1) Hàm Number (value)
+ Chuyển Value sang số
+ Nếu chuyển không được trả về NaN (NOt a Number)    

2) Hàm isNaN (value): Kiểm tra xem giá trị ( hoặc biểu thức) truyền vào
 + kiểm tra value không phải định dạng số: NaN (Not a Number), hoặc không thể chuyển sang định dạng số
  step 1: Cố gắng chuyển đổi về kiểu number
  Step 2: 
    -> Trả về TRUE, nếu giá trị sau chuyển đổi không phải là kiểu số (number)
    -> Trả về False, nếu giá trị sau chuyển đổi là kiểu số (number)

3) hàm Number.isNaN: được giới thiệu trong ECMAScript 2015 (ES6)
 + Phương thức này chỉ trả về TRUE nếu value hoặc biểu thức truyền vào có giá trị sinh ra NaN

*/
// 1 Hàm Number
let str = "123a";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

// let so = Number(prompt("Nhập vào số: "));
// console.log(so);

//Hàm isNaN
let a = "123a";
console.log(isNaN(a));

let b = Number(true); // đối với TRUE và FALSE mang ý nghĩa là 1 và 0 nên có thể chuyển đổi thành số
console.log(b);
console.log(typeof b);
console.log(isNaN(b));

console.log(isNaN(null)); // trả về giá trị là 0
console.log(isNaN("")); // trả về giá trị là 0
console.log(isNaN(" ")); // trả về giá trị là 0

//Number.isNaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abv" / "ahah"));
console.log(0 / 0);
