//BÀI 32: Array Js - Mảng trong JS
/*
    I) Mảng - Array js
        1) Tái ao phải dùng mảng:
        - Ví dụ: Chúng ta có khoản 20 người bạn cần lưu tên, nếu không dùng mảng 
        thì chúng ta phải khai báo 20 biến
            -> Quản lý và tổ chức dữ liệu một cách hiệu quả
            -> Truy cập và thay đổi dữ liệu dễ dàng
        2) Khái niệm: Mảng là tập hợp các phần tử có thể cùng hoặc khác kiểu dữ liệu
        (Number, string, array, object, boolean...)
        - Mảng có index có bắt đầu từ 0
        3) Khai báo mảng:
        - Cách 1 (thường dùng): Sử dụng cặp dấu ngoặc vuông []
            Khai báo mảng rỗng
            let arr1 = [];
            console.log(arr1);
            Tạo mảng có sẵn các phần tử bên trong
            let arr2 = [1, 2, 3, 4];
            console.log(arr2);
        - Cách 2: sử dụng Array và Constructor
            Khai báo mảng rống sử dụng Array constructor
            let arr3 = new Array();
            console.log(arr3);
            Tạo một mảng có sẵn các phần tử bên trong
            let arr4 = new Array(1, 2, 3, 4, "nam");
            console.log(arr4);
            Tạo mảng với độ dài xác định, các phần tử là undefined
            let arrayWithLength = new Array(5); //Tạo ra một mảng có 5 phần tử rỗng và length là cố định
            console.log(arrayWithLength);
        4) Truy xuất phần tử của mảng
            let arr5 = [4, 5, 6, 7, 8];
            console.log(arr5[2]); //xuất ra [6]
            console.log(arr5[3]); //Xuất ra [7]
        5) Thuộc tính length : trả về số phần tử của mảng (chiều dài mảng, bắt đầu từ 1)
            console.log(arr5.length);
        6) Gán, thay đổi giá tị cho mảng qua index
            let arr6 = [5, 6, 7];
            arr6[1] = 10; //gán giá trị tại index 1 = 10
            console.log(arr6);
        7) Duyệt mảng
        7.1) Cách dùng vòng lặp for
            (có thể xem và sửa giá trị của mảng)
            let arr7 = [1, 2, 3, 4, 5];
            console.log(arr7);
            for (let i = 0; i < arr7.length; i++) {
            console.log(arr7[i]);
            arr7[i] = arr7[i] * 2;
            }
            sau khi thay đổi, xuất arr7
            console.log(arr7); //Output : [2,4,6,8,10]

        7.2) Cách dùng for...of
            Chỉ có thể xem, không sửa được giá trị của mảng
            let count = 0;
            let arr8 = [1, 2, 3, 4, 5];
            for (let element of arr8) {
            Kiểm tra điều kiện thì được
            if (element % 2 === 0) {
                console.log(element);
                count++;
            }
            element là phần tử có thể thay đổi
            console.log(element);
            element = 5; //không gán dc giá trị cho mảng chỉ xem
            }
            console.log("Số lượng số chẵn có trong mảng: " + count);
            console.log(arr8);


*/
//3. Khai báo mảng
//3.1 Sử dụng cặp dấu ngoặc []
//Khai báo mảng rỗng
let arr1 = [];
console.log(arr1);
//Tạo mảng có sẵn các phần tử bên trong
let arr2 = [1, 2, 3, 4];
console.log(arr2);

//3.2 Sử dụng Array và Constructor
//Khai báo mảng rống sử dụng Array constructor
let arr3 = new Array();
console.log(arr3);
//Tạo một mảng có sẵn các phần tử bên trong
let arr4 = new Array(1, 2, 3, 4, "nam");
console.log(arr4);
//Tạo mảng với độ dài xác định, các phần tử là undefined
let arrayWithLength = new Array(5); //Tạo ra một mảng có 5 phần tử rỗng và length là cố định
console.log(arrayWithLength);
//bởi vì không có giá trị nên sẽ trả về undefined
// console.log(arrayWithLength[0]);
// console.log(arrayWithLength[1]);
// console.log(arrayWithLength[2]);
// console.log(arrayWithLength[3]);
// console.log(arrayWithLength[4]);

//4.Truy xuất phần tử của mảng qua vị trí index
let arr5 = [4, 5, 6, 7, 8];
console.log(arr5[2]); //xuất ra [6]
console.log(arr5[3]); //Xuất ra [7]

//5. Thuộc tính length
console.log(arr5.length);

//6. Gán và thay đổi giá trị cho mảng qua index
let arr6 = [5, 6, 7];
arr6[1] = 10; //gán giá trị tại index 1 = 10
console.log(arr6);

//7.Duyệt mảng
//7.1 Cách dùng vòng lặp for
//(có thể xem và sửa giá trị của mảng)
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
  arr7[i] = arr7[i] * 2;
}
//sau khi thay đổi, xuất arr7
console.log(arr7); //Output : [2,4,6,8,10]

//7.2 Cách dùng for...of
//Chỉ có thể xem, không sửa được giá trị của mảng
let count = 0;
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
  //Kiểm tra điều kiện thì được
  if (element % 2 === 0) {
    console.log(element);
    count++;
  }
  //element là phần tử có thể thay đổi
  console.log(element);
  element = 5; //không gán dc giá trị cho mảng chỉ xem
}
console.log("Số lượng số chẵn có trong mảng: " + count);
console.log(arr8);
