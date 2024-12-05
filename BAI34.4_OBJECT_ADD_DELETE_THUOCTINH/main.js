//Bài 34.4 JS Object - Thêm & Xóa thuộc tính
/*
    



*/
//#1. Khai báo đối tượng, literal syntax
let student = {
  //key : value
  //Thuộc tính
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  score: [8, 9, 10],
  //Phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  // Phương thức được viết lại, để trả về thuộc tính
  getAge2: function () {
    //Sử dụng this.xxx tạo ra thuộc tính mới cho đối tượng student
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  diemTB: function () {
    //tính tổng điểm
    sumScore = this.score.reduce((a, b) => a + b, 0);
    //trả về dtb
    return sumScore / 3;
  },
};

//Có thể khai báo key dưới dạng chuỗi
//(key có thể chứa các ký tự đặc biệt bất kỳ, thậm chí có thể vi phạm nguyên tắc đặt tên biến)
let teacher = {
  "1 fullName": "jacob",
  "@address": {
    city: "Hà Nội",
    country: "Việt Nam",
  },
};
//kiểm tra kiểu dữ liệu
console.log(typeof student);
console.log(typeof teacher);

//#2. Truy cập thuộc tính: Dot Notation(.) và Bracket Notation[]
//2.1 Sử dụng dot (.) - Dot Notation
console.log(student.fullName); //Trần Như Nhộng
console.log(student.address);
console.log(student.score);

//2.2 Sử dụng Bracket Notation
console.log(teacher["1 fullName"]); //sử dụng khi gặp các key đặc biệt
console.log(student["fullName"]);

//2.3 Linh động sử dụng [] với biến
//let inputKey = prompt("mời nhập Key (address, score)");
let inputKey = "address";
console.log("Truy xuất đến key dùng với tên biến inputKey");
//let inputKey = "address";
console.log(student[inputKey]);
//Nếu truy xuất đến 1 key không tồn tại sẽ trả về undefined
//ví dụ nhập vào key : job --> undefined

//ví dụ: kiểm tra xem nếu nhập ket không tồn tại thì báo lỗi
//xem lại bài 18: Truthy and Falsy Values
if (student[inputKey]) {
  //nếu trả về undefined thì là false
  console.log(student[inputKey]);
} else {
  console.log("Key bạn nhập không tồn tại");
}

//#3.1 Truy cập phương thức
console.log("truy cập phuong thức ");
console.log(student.getAge()); // đối với phương thức phải thêm dấu ngoặc ()
console.log(student.diemTB());

/*
  #3.2 Vấn đề: Giả sử trong chuong tình bạn cần gọi nhiều lần hàm getAge
  --> Chương trình sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại nhiều lần 
  */
//Mỗi lần sử dụng phải gọi đi gọi lại phương gây lãng phí tài nguyên
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());
//=> sử dụng cách tạo thuộc tính mới để thay thế, trong đối tượng student tạo ra 1 thuộc tính getAge2

/*getAge2: function () {
      //Sử dụng this.xxx tạo ra thuộc tính mới cho đối tượng student
      this.age = 2024 - this.birthYear;
      return this.age;
    },*/

//Gọi phương thức getAge2
student.getAge2();

//xuất thử tuổi thông qua thuộc tính age mới được thêm từ getAge2
//hạn chế việc gọi đi gọi lại nhiều lần phương thức
console.log(student.age);

//#4. Thêm, xóa thuộc tính (thêm cặp key value)
//Thêm mới thuộc tính của đối tượng
student.email = "js Object mail"; //thêm thuộc tính mới
student["website"] = "js object website";

//Xuất đối tượng để xem
console.log(student); // xuất toàn bộ thuộc tính
console.log(student.email); //xuất 1 thuộc tính cụ thể
console.log(student.website); //xuất 1 thuộc tính cụ thể

//xóa bỏ thuộc tính
delete student.email; //xóa bỏ thuộc tính email
console.log(student);

//Sửa thuộc tính
student.website = "Giá trị mới đã sửa"; //sưa thuộc tính website của đối tượng
console.log(student);
