//Bài 34.16 Encapsulation - Tính đóng gói
/*
    I) Encapsulation - Tính đóng gói
    - Public fields: Trường công khai, trường công cộng
    - Private fields: Trường riêng tư
    - Public Method: Phương thức công khai
    - Private method: Phương thức riêng tư
    - Tính đóng gói cho phép che dấu thông tin và hành vi của một đối tượng và chỉ tiết lộ
    các phần cần cung cấp cho người dùng thông qua giao diện công khai

*/
//Thêm dấu gạch dưới: private fields trường riêng tư theo quy ước và nó vẫn có thể truy cập trực tiếp từ bên ngoài
class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this._pin = pin; //Được bảo vệ
    this._balance = 0; //Tài khoản bằng 0 lúc tạo thẻ
  }
  //Phương thức gửi tiền vào tài khoản
  deposit(value) {
    this._balance += value;
  }
  //Phương thức rút tiền
  withdraw(value) {
    if (value > this._balance) {
      console.log("Số tiền trong tài khoản không đủ");
    } else {
      this._balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}
//tạo đối tượng
const wallet = new Wallet("MB Bank", "1234");
console.log(wallet._balance);
//gửi tiền
wallet.deposit(1000);
//rút tiền
wallet.withdraw(500);
//xem tài khoản, pin
console.log(wallet._balance);
console.log(wallet._pin);

//Bài toán là chúng ta không muốn cho phép truy cập trực tiếp để kiểm tra số dư và số pin
