//Bài 30.1 Bài tập chuỗi 24-28
/*
Bài tập 24: 
nhập vào 1 chuỗi từ bàn phím.
    1. Đếm xem có bao nhiêu ký tự thường
    2. Đếm có bao nhiêu ký tự in hoa
    3. Đếm có bao nhiêu chữ số
    4. Đếm có báo nhiêu space

Bài tập 25:
a) viết chương trình kiểm tra tính hợp lệ của mật khẩu
    1. Mật khẩu hợp lệ khi có ít nhất 6 ký tự
    2. Chứa ít nhất 1 chữ cái viết hoa
    3. Chứa ít nhất 1 chữ cái viết thường
    4. Chứa ít nhất 1 chữ số
b)  Cho người dùng nhập vào kật khẩu để login / so sánh, nếu đúng mở
của, sai quá 5 lần khoá đăng nhập, thoát chương trình
//ví dụ mật khẩu hợp lệ: Abc123    

Bài tập 26:
Viết chương trình chuyển tin nhắn sang mật mã theo bảng:
    const a ="abcdefghijklmnopqrstuwxyz"
    const b ="zxcvbnmasdfghjklqwertyuiop"

Bài tập 27:
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
    Đếm từ "tôi" trong string a trên.

Bài tập 28:
Viết chương trình tách số và chữ từu chuỗi nhập vào thành 2 chuỗi:
    vi du nhập vào: abc123 sẽ tách và in ra thành 2 chuỗi abc và 123
*/

//Bài tập 24:
//Nhập chuỗi từ bàn phím
// let inputStr1 = prompt("nhập vào chuỗi ký tự");
// console.log(inputStr1);
// let lowerCaseCount = 0,
//   upperCaseCount = 0,
//   digitCount = 0,
//   spaceCount = 0,
//   char = 0;

// //Duyệt qua từng ký tự trong chuỗi và đếm số lượng ký tự các loại
// for (let i = 0; i <= inputStr1.length; i++) {
//   char = inputStr1[i];
//   //Kiểm tra từng loại
//   if (char >= "a" && char <= "z") {
//     lowerCaseCount++;
//   } else if (char >= "A" && char <= "Z") {
//     upperCaseCount++;
//   } else if (char >= "0" && char <= "9") {
//     digitCount++;
//   } else if (char === " ") {
//     spaceCount++;
//   }
// }
// console.log("Số lượng chữ thường: " + lowerCaseCount);
// console.log("Số lượng chữ hoa: " + upperCaseCount);
// console.log("Số lượng chữ số: " + digitCount);
// console.log("Số lượng chữ space: " + spaceCount);

//Bài tập 25:
//Tạo hàm kiểm tra tính hợp lệ của mật khẩu
// function isPasswordValid(password) {
//   //Kiểm tra độ dài mật khẩu có hợp lệ ko
//   if (password.length < 6) {
//     return false;
//   }
//   let hasUpperCase = false, //Có ký tự hoa
//     hasLowerCase = false, //Có ký tự thường
//     hasDigit = false; //Có ký tự số

//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];
//     if (char >= "a" && char <= "z") {
//       hasLowerCase = true;
//     } else if (char >= "A" && char <= "Z") {
//       hasUpperCase = true;
//     } else if (char >= "0" && char <= "9") {
//       hasDigit = true;
//     }
//   }
//   return hasUpperCase && hasLowerCase && hasDigit; //trả về TRUE khi các điều kiện đều TRUE
// }

// //Set mật khẩu
// function setPassword() {
//   let password = prompt("Nhập vào mật khẩu");
//   if (isPasswordValid(password)) {
//     //tương đương isPasswordValid(password) = true
//     alert("Mật khẩu thành công: " + password);
//     return password;
//   } else {
//     alert(`Mat khẩu ${password} không hợp lệ
//               1. Có ít nhất 6 ký tự
//               2. Có ít nhất 1 chữa hoa
//               3. Có ít nhất 1 chữ thường
//               4. Có ít nhất 1 chữ số`);
//     //gọi hàm setPassword
//     setPassword();
//   }
// }

// //Gọi hàm set password và gán password vào biến nếu thành công
// let passwordOK = setPassword();

// //Viết chương trình đăng nhập
// let countLogin = 0;
// while (true) {
//   let passwordLogin = prompt("Nhập mật khẩu đăng nhập");
//   if (passwordLogin === passwordLogin) {
//     alert("Đăng nhập thành công");
//   } else {
//     countLogin++;
//     if (countLogin < 5) {
//       alert(`Bạn đã nhập sai ${countLogin}/5`);
//     } else {
//       alert("Bạn đã nhập sai quá số lần, tài khoản sẽ lock");
//       break;
//     }
//   }
// }

/*Bài tập 26:
Viết chương trình chuyển tin nhắn sang mật mã theo bảng:
    const a ="abcdefghijklmnopqrstuwxyz"
    const b ="zxcvbnmasdfghjklqwertyuiop"
*/
// function encryptMessage(message) {
//   const a = "abcdefghijklmnopqrstuvwxyz";
//   const b = "zxcvbnmasdfghjklqwertyuiop";
//   let result = "";
//   for (let i = 0; i < message.length; i++) {
//     let char = message[i].toLowerCase(); //chuyển tất cả ký tự dc duyệt sang thường để so sánh vs bảng mã
//     //Kiểm tra ký tự nhập vào có trong bảng mã hay ko
//     // nếu ký tự char nằm trong biến a
//     if (a.includes(char)) {
//       //thực hiện chuyển đổi
//       //Kiểm tra vị trí index ký tự nhập vào trong a hay không
//       let index = a.indexOf(char);
//       //Lấy giá trị index, giống sang chuỗi b để lấy ký tự tương ứng trên b
//       result += b[index];
//     } else {
//       //Nếu không có thì giữ nguyên ký tự và cộng thêm vào result
//       result += char; //result = result + char
//     }
//   }
//   return result;
// }
// //cho người dùng nhập liệu
// let messageInput = prompt("Nhập vào tin cần mã hóa: ");
// let kq = encryptMessage(messageInput);
// alert(`Tin nhắn đã được mã hóa: ${kq}`);

/*Bài tập 27:
const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
    Đếm từ "tôi" trong string a trên.
*/
// function countStr() {
//   const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
//   alert(a);
//   let inputStr = prompt("nhập vào cụm muốn kiểm tra: ").toLowerCase(); //convert ký tự được nhập vào qua chữ thường để so sánh
//   let arrayStr = a.split(" "); //Cắt chuỗi thành từng cụm từ
//   console.log(arrayStr);
//   let count = 0;
//   let found = true;
//   for (let i = 0; i <= arrayStr.length; i++) {
//     // duyệt qua các cụm từ trong mảng vừa được cắt
//     if (arrayStr[i] === inputStr) {
//       //nếu vị trí của từ trong mảng === với giá trị nhập vào thì đếm
//       count++;
//       found = true; //đánh dấu là đúng
//     }
//   }
//   if (!found) {
//     // đánh dấu nếu sai thì thực hiện điều kiện
//     alert("Cụm bạn tìm kiếm không tồn tại");
//   }
//   return count; //trả về số lượng biến đếm
// }

// let checkInput = countStr();
// alert(`Số lượng từ: ${checkInput}`);

/*Bài tập 28:
Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi:
    vi du nhập vào: abc123 sẽ tách và in ra thành 2 chuỗi abc và 123
*/
function separate(inputString) {
  let letters = "";
  let numbers = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (isNaN(char)) {
      //Nếu kĩ tư char không là số thì thêm chuỗi vào letters
      letters += char;
    } else {
      //Nối ksy tự chuỗi vào number
      numbers += char;
    }
  }
  return { letters, numbers };
}
let inputStr = prompt("Nhập vào chuỗi giá trị: ");
let result = separate(inputStr);
console.log(result.letters);
console.log(result.numbers);
