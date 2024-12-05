//Bài 34.2 Truy cập vào thuộc tính Dot Notation & Bracket Notation
/*
    II)Truy cập thuộc tính
        2.1 Sử dụng dot (.) - Dot Notation:
            console.log(student.fullName);
            console.log(student.score);
            console.log(student.score[1]);
        2.2 Sử dụng [] - Bracket Notation - và truyền vào giá trị của key
        Bracket Notation đùng khi ket đặc biệt - có khoảng trắng, vi phạm quy tắc đặt tên biến
            console.log(teacher["1 fullName"]);
            console.log(student["fullName"]);
        2.3 Linh động sử dụng [] - Bracket Notation với biến
        let inputKey = prompt("mời nhập Key (address, score)");
        console.log("Truy xuất đến key dùng với tên biến inputKey");
        console.log(student[inputKey]);








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
let inputKey = prompt("mời nhập Key (address, score)");
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
