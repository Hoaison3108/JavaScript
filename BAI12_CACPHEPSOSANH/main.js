//Bài 12: Các phép so sánh (> >= < <= == ===)
/*
Phép so sánh
    != : khác nhau chỉ quan tâm giá trị, ko quan tâm kiểu_ Ex: 1!=1 _ kết quả FALSE
    !== : khác nhau so sánh giá trị và kiểu
    > : Lớn hơn 
    < :bé hơn
    >= : Lớn hơn hoặc bằng
    <= : Bé hơn hoặc bằng
    == : bằng nhau không quan tâm kiểu dữ liệu, chỉ so sánh giá trị _ Ex: "1" == 1 _kết quả TRUE
    === : bằng nhau so sánh giá trị và kiểu dữ liệu _ Ex: "1"===1 _Kết quả False 
*/

let a = 3;
let b = 3;
let c = "3";
console.log(typeof b);
console.log(typeof c);

//Các phép so sánh trong toán học
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
console.log(b != c); // lưu ý

//So sánh bằng == không quan tâm đến kiểu dữ liệu, chỉ so sánh giá trị
console.log(a == b);
console.log(c == b);

//So sánh tuyệt đối === so sánh giá trị và kiểu dữ liệu
console.log(c === b);
console.log(a === b);

console.log("Phần 2");
console.log(a != b);
console.log(b != c); //so sánh giá trị, ko quan tâm kiểu biến

console.log(a !== b);
console.log(b !== c); // So sánh giá trị và kiểu biến
/*
 == : bằng nhau so sánh giá trị, ko so sánh kiểu dữ liệu
    - Tuân theo quy tắc Coercion ( ép buộc) ép kiểu ngầm định trong js
    - Ngầm chuyển đổi kiểu dữ liệu trước khi so sánh (Type Conversion)

 === : bằng nhau so sanh giá trị và so sánh kiểu dữ liệu
    - Không tuân theo Coercion (ép buộc )
    - Không ngầm chuyển đổi kiểu dữ liệu trước khi so sánh (Type Conversion)

*/
