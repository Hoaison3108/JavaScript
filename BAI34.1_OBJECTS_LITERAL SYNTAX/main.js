//Bài 34.1 JS Objects Literal Syntax
/*
    I) Tổng quan về object
        - Chúng ta đã được học về biến để lưu trữ dữ liệu cụ thể:number, string, bollean,...
        - Array để lưu trữ 1 tập hợp phần tử, ví dụ: 20 giá trị là tên của học sinh -> bản chất array có kiểu 
        dữ liệu là object, do js đã xây dựng sẵn
        - Ta cũng có thể tự xây dựng object theo quy tắc do mình đặt ra -> ví dụ 1 trường học
        có 1000 vinh viên, mỗi sinh viên lại có các thông tin: Tên, ngày tháng năm sinh, quê quán, số căn cước, điểm tốt nghiệp...
        -> Object ra đời để đảm nhiệm việc này
        - Object là một cấu trúc dữ liệu mạnh mẽ, cho phép bạn lưu trữ và tổ chức thông tin dưới dạng
        cặp key-value
        - Đối tượng (object) trong lập trình hướng đối tượng giống như 1 đối tượng cụ thể trong thế giới thực
        Mỗi đối tượng có các thuộc tính và phương thức riêng
            + Thuộc tính : Đặc điểm của đối tượng
            + Phương thức : Hành vi của đối tượng
    II) Khai báo object
        1) Literal syntax:
        - Sử dụng cặp {} để định nghĩa 1 đối tượng với các cặp key value
        - Mỗi đối tượng có thuộc tính và phương thức riêng 
            + Thuộc tính (properties): Đặc điểm của đối tượng (Biến)
            + Phương thức (method): Hành vi của đối tượng (Hàm)
        - Có thể khai báo key dưới dạng chuỗi
            (key có thể chứa các ký tự đặc biệt bất kỳ, thậm chí có thể vi phạm nguyên tắc đặt tên biến)





*/
//#1. Tổng quan - Literal Syntax
let a = 5;
let b = 7.5;
console.log(typeof a);
console.log(typeof b);
let check = true;
console.log(typeof check);

let str = "Hôm nay tôi học Obj";
console.log(typeof str);

M = ["hoa", "trang", "lan", "mai"];
console.log(typeof M);

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
  "1 fulllName": "jacob",
  "@address": {
    city: "Hà Nội",
    country: "Việt Nam",
  },
};
