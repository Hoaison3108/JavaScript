//Bài 18 TRUTHY AND FALSY VALUE
/*
 - Chúng ta đã bàn đến ép kiểu dữ liệu từ chuỗi -> số dùng Number, parseInt, parseFloat
 - Cũng có thể ép ngược lại từ số -> chuỗi
 - Tuy nhiên đối với kiểu boolean (kiểu lý luận TRUE FALSE thì cần chú ý)

    Trong js, một số giá trị được coi là "falsy" (giá trị sai)
    những giá trị này khi được chuyển đổi thành kiểu Boolean -> sẽ mang giá trị false
    Ngược lại, các giá trị không phải là "falsy" được coi là "truthy" (giá trị đúng)
    1. false: Giá trị Boolean false luôn là "falsy"
    2. 0: Số không (0) được coi là "falsy"
    3. -0: số âm không (-0) cũng là "falsy"
    4. 0n: số BigInt không (0n) cũng là "Falsy"
    5. "": chuỗi rỗng (khong có ký tự nào) cũng là "falsy"
    6. null: giá trị null được coi là falsy
    7. undefined: giá trị undefined cũng là falsy
    8. NaN: giá trị NaN (Not a Number) được coi là Falsy

*/

let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);
console.log("Giá trị của b là: " + b);

// 8 giá trị falsy chuyển sang Boolean sẽ nhận giá trị là False
//false, 0, -0, 0n, "", null, undefined, NaN

let c = Boolean(false);
console.log(c);
console.log(typeof c);

//Tác dụng của việc ép kiểu boolean là kiểm tra giá trị
// ví dụ kiểm tra giá 1 biến đã được gán giá trị hay undefined
let salary;
console.log(salary);
if (salary) {
  // tương đương if (salary === true)
  console.log("salary is defined");
} else {
  console.log("salary is undefined");
}
