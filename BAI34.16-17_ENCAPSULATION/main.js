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
  //Khai báo trường private fields
  #pin;
  #balance;
  #isPinEntered = false;
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin; //Được bảo vệ
    this.#balance = 0; //Tài khoản bằng 0 lúc tạo thẻ
  }
  //Phương thức gửi tiền vào tài khoản
  deposit(value) {
    if (!this.#isPinEntered) {
      //Nếu mã pin sai
      console.log("Kiểm tra lại mã pin");
      return; //thoát phương thức và ko thực hiện đoạn code phía sau
    }
    this.#balance += value;
  }
  //==========================
  //Private method
  #validatePin(pin) {
    return this.#pin === pin; //trả về true hoặc false
  }
  //Public method
  enterPin(pin) {
    if (this.#validatePin(pin)) {
      //nếu cum trên bằng true thì mã pin đúng
      this.#isPinEntered = true;
    } else {
      console.log("Invalid pin - pin Không chính xác");
    }
  }

  //==========================
  //Phương thức rút tiền
  withdraw(value) {
    //phủ định của true là false
    if (!this.#isPinEntered) {
      //Nếu mã pin sai
      console.log("Kiểm tra lại mã pin");
      return; //thoát phương thức và ko thực hiện đoạn code phía sau
    }
    if (value > this.#balance) {
      console.log("Số tiền trong tài khoản không đủ");
    } else {
      this.#balance -= value;
      console.log("Rút tiền thành công");
    }
  }

  //Getter xem tài khoản
  get balance() {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    return this.#balance; //dòng này chỉ thực hiện khi mã pin đúng
  }
}
//tạo đối tượng
const wallet = new Wallet("MB Bank", "1234");
//Nhập mã pin
wallet.enterPin("1234");

//console.log(wallet.#balance);
//gửi tiền
wallet.deposit(1000);
//rút tiền
wallet.withdraw(500);
//xem tài khoản, pin
//console.log(wallet.#balance);
//console.log(wallet.#pin);
console.log(wallet.balance);

//Bài toán là chúng ta không muốn cho phép truy cập trực tiếp để kiểm tra số dư và số pin
