//Bài 34.3 Truy cập phương thức
/*
    III) Truy cập phương thức
        3.1 Truy cập phương thức
            console.log("truy cập phuong thức ");
            console.log(student.getAge()); đối với phương thức phải thêm dấu ngoặc ()
            console.log(student.diemTB());
        3.2 Vấn đề: giả sử rong chương trình bạn cần gọi nhiều hàm getAge
        -> Chương trình của bạn sẽ mấy nhiều lần tính toán do hàm bị gọi đi gọi lại
        -> Để giảm tải, tăng tốc độ cho chương trình, sử dụng mẹo gán giá trị trả về vào thuộc tính
        -> Hàm chỉ cần gọi 1 lần




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
