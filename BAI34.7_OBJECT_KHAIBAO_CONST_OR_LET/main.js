//Bài 34.7 JS Object Khai báo đối tượng sử dụng const hay let
/*
    Ôn tập:
     có 3 cách khai báo biến var, let, const
     1. Vat cho phép tái định nghĩa đối với 1 biến
     2. Let không cho phép tái định nghĩa 2 biến trùng tên (nên dùng let khai báo hạn chế sai sót)
     3. Const không cho phép thay đổi giá trị của biến
     - Khi sử dụng let, chỉ khởi tạo được 1 lần duy nhất 
     let person =1 //báo lỗi không thể tái khai báo
     Nhưng chúng ta vẫn có thể gán lại giá trị cho nó
     -> Để tránh điều này xảy ra, thường sử dụng const để khai báo đối tượng
     
*/
//khai báo đối tượng dùng let
let person = {
  name: "john",
  age: 30,
};

//Thay đổi giá trị của person
person = 5;
console.log(person);

//Khái báo đối tượng sử dụng const
const person2 = {
  name: "john",
  age: 30,
};
//person2 = 5; //báo lỗi không có phép ghi đè đối tượng
console.log(person2);

//Có thể thêm sửa xóa các thuộc tính bình thường bằng cách dùng các phương thức
//chỉ không có phép ghi đè trực tiếp 1 đối tượng đã khai báo

person2.isAdmin = true; //thêm mới thuộc tính bình thường
person2.name = "Tom"; //sửa thuộc tính bình thường
delete person2.age; //Xóa thuộc tính bình thường
console.log(person2);
