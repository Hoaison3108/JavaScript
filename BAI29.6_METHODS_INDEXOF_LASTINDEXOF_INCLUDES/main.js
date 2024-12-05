//BÀI 29.6 String Methods indexOf, lastIndexOf, includes
/*
    I) Phương thức indexOf(), lastIndexOf(), includes()
        1) indexOf(searchValue, [fromIndex]);
            => Tìm kiếm (searchValue) xuất hiện lần đầu trong chuỗi.
        nếu tồn tại trả về vị trí index, 0 tồn tại trả về -1
        2) lastIndexOf(searchValue, [endIndex]);
            => Tìm kiếm (searchValue) xuất hiện lần cuối trong chuỗi
        nếu tồn tại trả về vị trí index, 0 tồn tại trả về -1
        3) includes(searchValue, [fromIndex]);
            => Kiểm tra chuỗi con fromIndex (tùy chọn)

*/
//5.12 string.indexOf(searchValue, fromIndex);
/*
Tìm kiếm (searchValue) trong chuỗi
nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
[fromIndex] (tùy chọn): vị trí bắt đầu tìm kiếm trong chuỗi
Nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ đầu chuỗi
*/
let s25 = "abcdef abcdef";
let s26 = s25.indexOf("c"); //Kiểm tra vị trí chữ "c" xuất hiện lần đầu tiên trong chuỗi
console.log(s26);
// Tìm "c" nhưng bắt đầu từ vị trị index 3
console.log(s25.indexOf("c", 3)); //[fromIndex] =3
/*
    [fromIndex] (tùy chọn): vị trí bắt đầu tìm kiếm trong chuỗi
*/
let notFoundIndex = s25.indexOf("g");
console.log(notFoundIndex); //Trả về -1 vì "g" không có trong chuỗi

//5.13 string.lastIndexOf(searchValue, [endIndex]);
/*
tìm kiếm giá trị xuất hiện cuối cùng của chuỗi tìm kiếm, 
nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
endIndex (tùy chọn): vị trí bắt đầu tìm kiếm trong chuỗi từ phải sang trái
nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ cuối chuỗi
*/
let s27 = "abcdef abcdef";
let s28 = s27.lastIndexOf("ab");
console.log(s28);
//tìm với tham số [endIndex]
console.log(s27.lastIndexOf("a", 7));
console.log(s27.lastIndexOf("a", 6));

//5.14 string.includes(searchString, [fromIndex]);
/*
Tìm kiếm (searchValue) có trong chuỗi gốc hay không?
nếu có trả về TRUE
Nếu không có trả vè FALSE
[fromIndex] (tùy chọn): Vị trí bắt đầu tìm kiếm trong chuỗi
Nếu bỏ trống, tìm kiếm toàn bộ chuỗi
*/
let s29 = "abcdef abcdef";
console.log(s29.includes("a")); //trả về true
console.log(s29.includes("g")); //trả về false
//Tìm a bắt đầu từ vị trí index 8
console.log(s29.includes("a", 7)); //trả về true
