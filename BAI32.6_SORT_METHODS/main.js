//Bài 32.6 Phương thức Sort()
/*
I) Sort(...)
    Cú pháp: array.sort([compareFunction])
    - array: mảng cần sắp xếp
    - compareFunction (tùy chọn): hàm so sánh được sử dụng để xác định thứ tự sắp xếp
    Nếu không được cung cấp, sort() sẽ sắp xếp các phần tử dưới dạng chuỗi Unicode
    Hàm so sánh (Compare Function)
        1. Nếu compareFunction được cung cấp, nó sẽ nhận hai đối số, thường được gọi là a và b
        2. Nếu compareFunction (a,b) trả về một giá trị <0, s sẽ được đặt trước b
        3. Nếu compareFunction (a,b) trả về 0, thứ tự giữa a và b không thay đổi
        4. Nếu compareFunction (a,b) trả về một giá trị > 0, b sẽ được đặt trước a


*/

/*14.1 khi không truyền compareFunction: So sánh lần lượt từ ký tự đầu, đến các ký tự phía sau
(Nếu các ký tự khác nhua sẽ dừng so sánh -> sắp xếp theo thứ tự tăng dần dựa theo thứ tự trong 
bảng mã UNICODE)
*/
//TH1:
let M1 = ["a", "b", "c"];
//Để xem giá trị unicode dùng charCodeAt()
console.log("b".charCodeAt());
//duyệt mảng để xem
for (let element of M1) {
  //duyệt qua các phần tử của mảng M1
  //console.log(element);
  console.log(`${element} có mã Unicode là: ${element.charCodeAt()}`);
}

let sortedM1 = M1.sort();
console.log(sortedM1);

//TH2: phần tử có nhiều ký tự so sánh các ký tự đàu để xếp
//Nếu ký tự giống nhau so tiếp đến ký tự phía sau, mã unicode thấp hơn xếp trước (xếp theo thứ tự a-z)
let M2 = ["baa", "aaa", "a", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2);

//ví dụ với ký tự số ( vì xếp theo Unicode nên kq không như mong muốn)
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3); // xuất ra kết quả [1,10000,9] không đúng với mong muốn

/*
14.2 sử dụng với hàm so sánh compareFunction
    Hàm so sánh (Compare Function)
        1. Nếu compareFunction được cung cấp, nó sẽ nhận hai đối số, thường được gọi là a và b
        2. Nếu compareFunction (a,b) trả về một giá trị <0, s sẽ được đặt trước b
        3. Nếu compareFunction (a,b) trả về 0, thứ tự giữa a và b không thay đổi
        4. Nếu compareFunction (a,b) trả về một giá trị > 0, b sẽ được đặt trước a
*/
let M4 = [9, 3, 5, 4];
//trước khi sắp xếp
console.log(M4);
//sắp xếp tăng dần
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4);

//sắp xếp giảm dần
let sortedM5 = M4.sort((a, b) => b - a);
console.log(sortedM5);
