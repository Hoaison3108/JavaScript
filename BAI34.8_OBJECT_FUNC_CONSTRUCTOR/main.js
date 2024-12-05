//Bài 34.8 Hàm tạo Constructor trong Object
/*
I) Function Constructor 
    1) Khai báo
    - Sử dụng để tại khuôn mẫu (prototype)
    - Chúng ta đã học về 3 cách khai báo hàm -xem lại bài 25.2
        Lưu ý: khai báo constructor không dùng arrow function
    - Viết hoa chữ cái đầu để phân biệt với các hàm thông thường
    2.2) Tạo các đối tượng cụ thể từ hàm tạo Student
        //instance - các đối tượng riêng lẻ
        const sv1 = new Student("Nguyễn Văn A", "2024001", "2005", "Nam Định"); //tạo dc đối tượng đầu tiên từ hàm tạo Student
        const sv2 = new Student("Nguyễn Văn B", "2024002", "200$", "Hà Nội");
    2.3) Các bước tạo ra đối tượng
        Strep 1: Sử dụng từ khoá new để tạo một thể hiện mới cảu một hàm tạo 
            -> 1 đối tượng mới rỗng sẽ được tạo ra
        Strep 2: GỌi đến hàm tạo Student()
        Trong quá trình này, từ khóa this trong hàm tạo tham chiếu đến đối tượng mới vừa được tạo, 
        nơi các thuộc tính và phuong thức sẽ được gán
        Strep 3: {} linked đến prototype:
        Khi một thể hiện được tạo, js tự động liên kết nó với nguyên mẫu - sẽ được học sau
        Strep 4: Sau khi các thuộc tính và phương thức được gán cho đối tượng mới thông qua từ khóa this,
        hàm tạo sẽ tự động trả về đối tượng mới này
    2.4) Truy cập thuộc tính và phương thức của đối tượng
        console.log(sv1.fullName); //Dot Notation bài 34.2
        console.log(sv1["fullName"]); //Bracket notation bài 34.2
        console.log(sv1.showInfo());



*/
//#1. Khai báo đối tượng, literal syntax
const student = {
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

const student2 = {
  //key : value
  //Thuộc tính
  fullName: "Trần Văn B",
  birthYear: 2004,
  address: {
    city: "Hải Phòng",
    country: "Việt Nam",
  },
  score: [8, 7, 8],
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

//#2. Function() construction: hàm tạo - sử dụng để tạo khuôn mẫu (prototype)
//Viết hoa chữ cái đầu để phân biệt với các hàm thông thường
// Cách 1: Function expression (ít dùng)
const SinhVien = function (fullName, ID, birthYear, homeTown) {
  //Thuộc tính và phương thức
  //This.key = value;
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  //Phương thức
  //this.key = function
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
};

//Cách 2: Function declaration (thường dùng)
function Student(fullName, ID, birthYear, homeTown) {
  //Thuộc tính và phương thức
  //This.key = value;
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  //Phương thức
  //this.key = function
  this.showInfo = function () {
    return `${this.fullName} - ${this.ID} - ${this.homeTown}`;
  };
}

//#2.2 Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo student
//instance - các đối tượng riêng lẻ
const sv1 = new Student("Nguyễn Văn A", "2024001", "2005", "Nam Định"); //tạo dc đối tượng đầu tiên từ hàm tạo Student
const sv2 = new Student("Nguyễn Văn B", "2024002", "200$", "Hà Nội"); //tạo dc đối tượng đầu tiên từ hàm tạo Student

//truy cập thuộc tính và phương thức của đối tượng
console.log(sv1.fullName); //Dot Notation bài 34.2
console.log(sv1["fullName"]); //Bracket notation bài 34.2
console.log(sv1.showInfo());

//Sv1 và Sv2 có thể gọi là các đối tượng cụ thể, hoặc gọi là các instance (thể hiện)
console.log("Kiểm chứng instance");
let abc = 1;
console.log(sv1 instanceof Student);
console.log(abc instanceof Student);

//Thêm, sửa, xóa thuộc tính
sv2.email = "Thêm thuộc tính Email.com"; //Thêm thuộc tính email
sv2.fullName = "Tên đã bị sửa"; //Sửa thuộc tính fullName
delete sv2.homeTown;
console.log(sv2);
