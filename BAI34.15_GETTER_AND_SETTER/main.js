//Bài 34.15 Getter and Setter Explained
/*
    I) Getter in JS
        - Getter là một phương thức được sử dụng để lấy ra giá trị của một thuộc tính
        - Setter là một phương thức được sử dụng để thiết lập giá trị cho một thuộc tính
        -> Thuộc tính có dấu (_) ví dụ như _score : chỉ là quy ước ngầm giữa các lập trình viên, biết rằng nó là thuộc tính
        được bảo vệ, protected và không nên can thiệp từ bên ngoài -> tuy nhiên cố tình can thiệp vẫn được
        - Getter, Setter: được dùng khi bạn có các thuộc tính mà không muốn người dùng truy cập trực tiếp
        - Getter, Setter: giúp bạn có thể them logic xử lý phức tạp cho việc đọc ghi chép dữ liệu ( xử lý logic...)
        - Getter, Setter: giúp tạo 1 giao diện đồng nhất cho việc truy cập và thiết lập giá trị của 1 thuộc tính


*/
class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this._score = score;
    //Thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái protected
    //và không nên truy cập, sửa đổi trực tiếp từ bên ngoài
  }
  //Phương thức
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
  //Getter cho thuộc tính score
  //Get dùng để xem
  get score() {
    return this._score;
  }
  //setter cho thuộc tính score
  //Set dùng để thiết lập
  set score(value) {
    //Thêm các biểu thức logic để kiểm tra giá trị có hợp lệ ko
    if (value >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("Điểm số không hợp lệ");
    }
  }
}

//tạo đối tượng
const john = new School("P2024001", "John", 2001, 95);
console.log(john.id);
console.log(john.birthYear);
console.log(john.name);
console.log(john._score); //Không nên truy cập trực tiếp giống như này
console.log(john.calcAge(2024));

//Sử dụng getter để xem thuộc tính
console.log(john.score);
//sử dụng setter để thiết lập lại giá trị
john.score = 75;
console.log(john.score);
