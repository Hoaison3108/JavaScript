//Bài 32.7 Reduce() Methods
/*
    I) Phương thức Reduce()
        Dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất sau khi tính toán
        Cú pháp: array.reduce(function, [initialValue])
        Hàm so sánh (compare Function)
            1. function: Một hàm để thực thi cho từ phần tử trong mảng
            2. initialValue: Giá trị khởi tạo
        function (accumulator, currentValue,[currentIndex],[array])
        Hàm được gọi với những đối số sau:
        1. accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm
        2. CurrentValue: giá trị hiên tại đang xử lý trong mảng
        3. currentIndex: (tùy chọn) chỉ số của phần tử đang xử lý
        4. array: (tùy chọn) Mảng đang được reduce (lặp qua)


*/
//Bài toán không sử dụng reduce()
let M1 = [3, 2, 3];
// Thực hiện tính tổng các phần tử trong mảng
let sum = 0;
for (let element of M1) {
  sum += element;
}
console.log("Tổng các phần tử trong mảng: " + sum);

//Bài toán sử dụng reduce()
let sum2 = M1.reduce(
  //Tham số thứ nhất là 1 hàm
  (accumulator, currentValue, currentIndex, array) => {
    /*accumulator: biến lưu trữ
     currentValue: giá trị hiện tại
     currentIndex: chỉ số của phần tử hiện tại
     array: Mảng dc lặp
     */
    return accumulator + currentValue;
  },
  0
  //Tham số hai: initialValue (giá trị khởi tạo ban đầu) ở đây là 0
  /*1. Nếu bỏ trống initialValue: 
    a. accumulator sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo
    và sẽ bắt đầu thực hiện từ phần tử thứ 2
    b. Nếu mảng trống mà 0 có giá trị initialValue --> reduce() sẽ báo lỗi
  */
);
console.log(sum2);

//Rút gọn lại
let sum3 = M1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
