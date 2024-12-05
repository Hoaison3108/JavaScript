//bài 29.5 String method replace (oldValue, newValue) repeat (count) in js
/*
    I) Phương thức: Replace(), Repeat()
        1) let newString = replace(oldValue, newValue);
            => Thay thế giá trị (oldValue) đầu tiên được tìm thấy trong chuỗi
        bằng giá trị mới (newValue)
        2) string.repeat(count);
            => Lặp lại chuỗi count lần count: số lần lặp lại chuỗi
*/
//5.10 Replace()
//Thay thế 1 ký tự
let s14 = "abc học học nữa học mãi";
console.log(s14.replace("học", "ngủ"));
//Thay thế tất cả dùng biểu thức chính quy (regular expression)
console.log(s14.replace(/học/g, "ngủ"));
/*
    /: bắt đầu biểu diễn chính quy
    học: chuỗi cần tìm và thay thế
    /: két thúc biểu diễn chính quy
    g: Cờ global -> khi sử dụng cờ này js sẽ tìm kiếm trong toàn bộ chuỗi
    "Ngủ" : chuỗi dc thay thế
*/
//5.11 Repeat(count): lặp chuỗi count lần countS
let s23 = "hello, ";
let s24 = s23.repeat(3);
console.log(s24);
