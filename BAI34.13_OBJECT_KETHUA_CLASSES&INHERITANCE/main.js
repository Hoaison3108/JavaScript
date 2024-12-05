//Bài 34.13 Kế thừa trong js ES6 - Classes and Inheritance
/*
    I) ES6 JS Class Inheritance
         



*/
//Định nghĩa lớp có sở áp dụng chung School
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
  //Phương thức của lớp dùng chung School
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

//Lớp Student kế thừa các thuộc tính từ lớp cha School
//class Student extends School {} //extends : kế thừa hoặc mở rộng từ lớp cha
// nếu không có thuộc tính mới thì ko cần khai báo thêm gì

//Trường hợp xuất hiện thêm thuộc tính và phương thức mới của class Student
class Student extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear); //sử dụng super để khai báo kế thừa các thuộc tính
    this.major = major;
  }
  //Phương thức riêng của student
  study() {
    console.log(`${this.name} is studding ${this.major}`);
  }
}

//Tạo đối tượng của lớp School
const p1 = new School("P200401", "Jacky", 2000);
//truy cập thuộc tính và phương thức
console.log(p1.id);
console.log(p1.birthYear);
console.log(p1.calcAge(2024));

//Tạo đối tượng củ sub Student
const s1 = new Student("P200402", "Văn Nam", 2002, "Computer Science");
//truy cập thuộc tính và phương thức
console.log(s1.id);
console.log(s1.name);
console.log(s1.birthYear);
console.log(s1.calcAge(2024));

//Truy cập thuộc tính và phương thức của sub class Student
console.log(s1.major);
s1.study();
console.log(s1);
