//Bài 32.8 Phương thức Filter()
/*
    I) Filter()
    Phương thức filter() : trích lọc các phần tử thỏa mãn điều kiện của hàm
    Dựa trên một hàm xử lý -> để tạo ra một mảng mới từ một mảng đã cho, chỉ chứa các phần tử 
    thỏa mãn một điều kiện nhất định được xác định bởi hàm
        Cú pháp: array.filter(function)
            1. function: một hàm để thực thi cho từng phần tử trong mảng
            function(currentValue,[currentIndex],[array])
            Hàm được gọi với những đối số sau:
                a. currentValue: Giá trị hiện tại đang xử lý trong mảng
                b. currentIndex: (tùy chọn) chỉ số của phần tử đang xử lý
                c. array: (tùy chọn) Mảng đang được duyệt
*/
let numbers = [1, 2, 3, 4, 5];
//tìm các số chẵn trong mảng
let evenNumbers = numbers.filter(
  //function
  (value, index, array) => value % 2 === 0
);
console.log(evenNumbers);
