//Bài 34.9 Hướng dẫn Prototype
/*
    I) Prototype 
        - Trong js mỗi đối tượng đều có một nguyên mẫu cha mẹ (prototype), ngoại trừ đối tượng gốc objectBase
        - ObjectBase là gốc của tất cả các đối tượng trong js
        - Nếu chúng ta lần theo đến tận cùng, sẽ thấy Object và nó không nguyên mẫu hoặc cha mẹ
        Mảng thực chất có kiêu dữ liệu là object 
        Bản chất là chúng ta đang tạo ra 1 đối tượng, bằng hàm tạo Array() được xây dựng sẵn trong js
        - Mọi hàm trong js đều có prototype
        - Trong js mỗi đối tượng đều cso một nguyên mẫu cha mẹ([[Prototype]]), ngoài trừ đối tượng gốc objectBase

*/
//Khai báo mảng
let M = new Array();
console.log(typeof M);
console.log(M);

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

//#4. Cách kiểm tra nguyên mẫu của đối tượng sv1
console.log("Kiểm tra nguyên mẫu cha mẹ của đối tượng sv1");
console.log(Object.getPrototypeOf(sv1));
//Mọi hàm trong js đều có prototype
console.log("Student.prototype ####: ");
console.log(Student.prototype);
//check
console.log(Student.prototype === Object.getPrototypeOf(sv1));

//Cách khác: kiểm tra Student có phải cha mẹ của sv1
console.log(Student.prototype.isPrototypeOf(sv1));

//#5. Thêm phương thức với Prototype
Student.prototype.calcAge = function () {
  //Thêm phương thức vào nguyên mẫu Student
  console.log(2024 - this.birthYear);
};
console.log(sv1); //sv1 sẽ kế thừa calcAge từ nguyên mẫu Student
/*
  - Kết quả phương thức calcAge() nằm trong nguyên mẫu của Student
  - Khi đó các đối tượng sv1, sv2 được kế thừa từ nguyên mẫu Student, do vậy chúng cũng 
  có thể truy cập vào các phương thức này
*/
sv1.calcAge();

//#6. Thêm thuộc tính với Prototype
Student.prototype.email = "noemail@gmail.com";
//Kiểm tra thuộc tính email của sinh viên đã được thêm chưa
console.log(sv1.email);
console.log(sv2.email);

//Kiểm tra sv1 có trực tiếp chứa thuộc tính hay dc kế thừa
console.log(sv1.hasOwnProperty("email")); //False được kế thừa từ student thêm vào sau
console.log(sv1.hasOwnProperty("fullName")); //True thuộc tính chứa trực tiếp
