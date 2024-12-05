//Bài 34.14 Giải Bài tập
/*
    Viết chương tình tính diện tích của hình vuông, hình chữ nhật, sử dụng mô hình kết thừa class trong js
*/
//Định nghĩa class Shape cơ sở
class Shape {
  //Khởi tạo thuộc tính
  constructor(name) {
    this.name = name;
  }
  //Khai báo phương thức
  calculateArea() {
    return 0;
  }
}

//Đinh nghĩa class Square kế thừa Shape
class Square extends Shape {
  //Khởi tạo thuộc tính
  constructor(name, side) {
    super(name);
    this.side = side;
  }
  //ghi đè lại Phương thức
  calculateArea() {
    return this.side * this.side;
  }
}

//Định nghĩa class Rectangle kế thừa Shape
class Rectangle extends Shape {
  //Khởi tạo thuộc tính
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  //ghi đè lại Phương thức
  calculateArea() {
    return this.width * this.height;
  }
}
//Tạo đối tượng của lớp
const sq1 = new Square("hình vuông", 5);
const rec1 = new Rectangle("hình chữ nhật", 4, 6);

//Tính diện tích và in ra kết quả
console.log(sq1.calculateArea());
console.log(rec1.calculateArea());
console.log(`Diện tích của hình ${sq1.name} là : ${sq1.calculateArea()}`);
console.log(`Diện tích của hình ${rec1.name} là : ${rec1.calculateArea()}`);
