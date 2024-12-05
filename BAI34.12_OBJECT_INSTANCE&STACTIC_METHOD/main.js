//Bài 34.12 Object Instance Method & Static Method
/*
    I) Instance Method
        - Trong mô hình hướng đối tượng JS có 2 loại phương thức: Instance Method và Static Method
        - Instance method : là những phương thức được gắn liền với các đối tượng cụ thể được tạo ra từ một
        lớp, bạn có thể gọi các phương thức instance của nó để thực hiện các hành động cụ thể trên thể hiện đó
    II) Static Method 
        - Phương thức tĩnh là những phương thức được gắn với lớp chứ không phải với các thể hiện cụ thể của lớp đó
        Bạn có thể gọi các phương thức tĩnh trực tiếp từ tên lớp mà không cần tạo một thể hiện của lớp đó
        - Phương thức tĩnh thường được sử dụng để thực hiện các chức năng chung liên quan đến lớp mà 
        không cần phụ thuộc vào dữ liệu của các thể hiện cụ thể


*/
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Instance method
  draw() {
    console.log("Phương thức vẽ dc gọi");
  }
  //Static method
  static calcArea(radius) {
    return Math.PI * radius * radius;
  }
}
//tạo đối tượng
//Sử dụng để tạo các chức năng chung
const c1 = new Circle(10);
const c2 = new Circle(5);

c1.draw();
c2.draw();

//gọi phương thức static
//Thực hiện phương thức mà không cần liên quan đến đối tượng, ko cần tạo đối tượng(c1,c2,c3...)
console.log(Circle.calcArea(10));
console.log(Circle.calcArea(5));

//Ví dụ dễ hiểu Static method: Math
a = -10;
console.log(Math.abs(a));
