//Bài 32.5 Toán tử spread
/* 13) spread()
    Toán tử spread() là một toán tử mới được thêm vào từ phiên bản ES6. Spread cho phép duyệt qua
    lần lượt các phần tử -> và qua đó ta có thể thực hiện:
        a. Tạo bản sao (clone) của mảng:
            - Tạo ra mảng mới nằm trên ô nhớ mới, có phần tử giống hệt mảng gốc
        b: Truyền đối số vào mảng
        c. Kết hợp mảng (nối mảng)
        d. Tạo mảng mới với thêm phần tử
        e. Chuyển đổi iterable ( có thể duyệt qua: string, arr) thành mảng

*/
//
//13.1 Tạo bản sao (clone) của mảng:
//Tạo ra mảng mới nằm trên ô nhớ mới, có phần tử giống hệt mảng gốc
let M1 = [1, 2, 3];
let M2 = [...M1];
console.log(M2);
//Mảng M2 là clone của M1 và thảy đổi giá trị của M2 không liên quan đến M1
M2[0] = 99;
console.log(M2);
console.log(M1);

//13.2 Truyền đối số vào hàm
function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
let result = sum(...numbers); //truyền thẳng đối số là 1 mảng vào 1 hàm
console.log(result);

//13.3 Kết hợp mảng
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combineArr = [...arr1, ...arr2]; //Nối hai mảng lại với nhau
console.log(combineArr);

//13.4 Tạo mảng mới với thêm phần tử
let M3 = [1, 2, 3];
let M4 = [...M3, 4, 5, 9]; //tạo ra bản sao (clone) M3 và thêm các phần tử mới vào
console.log(M4);

//13.5 Chuyển đổi iterable thành mảng (iterable: có thể duyệt được)
let myName = "jacky";
let chars = [...myName];
console.log(chars);
