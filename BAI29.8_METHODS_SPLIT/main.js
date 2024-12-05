//Bài 29.8 Methods Split()
/*
    I) string.split(separator, [limit]) - tách chuỗi trả về mảng
        1) string: chuỗi gốc cần tách
        2) separator: Chuỗi để xác định vị trí thực hiện tách
        nó có thể là một ký tự hoặc một biểu thức chính quy
        3) limit (tùy chọn): giới hạn số lượng phần tử trong mảng kết quả
*/
let student = "hoa,lan, huệ, trung";
let arr = student.split(",");
console.log(arr); //(4) ['hoa', 'lan', ' huệ', ' trung']

//Giới hạn phần tử của mảng
let arr2 = student.split(",", 3);
console.log(arr2); //(3) ['hoa', 'lan', ' huệ']

//Nếu nhập vào "" thì sẽ tách rời từng ký tự - > Mảng
let str = "abcdefgh 1234";
let arr3 = str.split("");
console.log(arr3);
//(13) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ' ', '1', '2', '3', '4']
