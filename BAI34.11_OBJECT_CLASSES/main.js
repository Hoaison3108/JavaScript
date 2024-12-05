//Bài 34.11 Hiểu rõ về class trong js
/*
    I) Tổng quan ES6 Classes
        - Về cơ bản ES6 sử dụng class để cung cấp cú pháp rõ ràng hơn só với cách sử dụng
        constructor function truyền thống, trên thực tế các class chỉ là một loại hàm đặc biệt
        - Class vẫn tuân theo những gì chúng ta đac học về kế thừa từ nguyên mẫu - prototype
    II) Các cách khai báo class
        2.1) Class expression ( ít dùng)

        2.2) class decoration (thường dùng)
    -> Tóm lại về cơ bản cách viết theo class giúp cú pháp nhìn gọn hơn, phân tách rõ phần thuộc tính và phương thức
    -> Nếu bạn đã học các ngôn ngữ khác thì cách sử dụng Class sẽ giúp cho bạn dễ tiếp cận hơn (ví dụ php, java, c#...)
    Nhưng cần lưu ý : bản chất js không có class, Class chỉ là 1 hàm đặc biệt và nó tuân theo kế thừa từ prototype
    -> Classes are not hoisted ( không tự động đưa khai báo lên đầu)
    III) Thêm phương thức vào class SinhVien thủ công (Sau khi có class)

 */
//Function declaration (thường dùng)
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

//Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo student
//instance - các đối tượng riêng lẻ
const sv1 = new Student("Nguyễn Văn A", "2024001", "2005", "Nam Định"); //tạo dc đối tượng đầu tiên từ hàm tạo Student
const sv2 = new Student("Nguyễn Văn B", "2024002", "200$", "Hà Nội"); //tạo dc đối tượng đầu tiên từ hàm tạo Student
console.log(sv1);
console.log(sv1.showInfo());

//#2. Khai báo ES6 classes
//2.1 Class expression
const SinhVienEx = class {
  //thuộc tính
  //phương thức
};

//2.2 Class decoration (thường đùng)
class SinhVien {
  //constructor method(phương thức được js xây dựng sẵn)
  //sử dụng hàm tạo constructor theo ES6
  constructor(fullName, ID, birthYear, homeTown) {
    //Thuộc tính và phương thức
    //Thuộc tính
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  //Các phương thức, khai báo trong thân class, khai báo ngoài constructor
  //không cần function keyword
  //Phương thức không tham số
  showInfo() {
    return `${this.fullName} - ${this.ID} - ${this.homeTown}`;
  }
  //Phương thức có tham số truyền vào
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

//tạo đối tượng từ class
const stu3 = new SinhVien("Thomas Edison", 123, 2000, "New York");
const stu4 = new SinhVien("No Name", 246, 2005, "New York");
//Xuất đối tượng
console.log(stu3);
//xuất phương thức
console.log(stu3.showInfo());

//Kiểm tra nguyên mẫu của đối tượng stu3, chính là class SinhVien
console.log(Object.getPrototypeOf(stu3));

//#3. Thêm phương thức vào class SinhVien thủ công (Sau khi có class)
// SinhVien.prototype.calcAge = function (currentYear) {
//   return currentYear - this.birthYear;
// };
console.log(stu3.calcAge(2024));
console.log(stu3);
console.log(stu4.calcAge(2024));
