//Bài 29.3 Tối ưu hóa chuỗi JS - trim(), trimEnd() và trimStart()
/*
    I) trim, trimEnd, trimStar - Xóa khoản trắng dư thừa
        1) trim(); xóa toàn bộ khoảng trắng ở cả hai đầu chuỗi
        2) trimEnd(); Xóa toàn bộ khoảng trắng ở cuối chuỗi
        3) trimStar() xóa toàn bộ khoảng trắng ở đầu

*/
//5.3 string.trim(); xóa bỏ khoản trắng ở cả hai đầu chuỗi
let s11 = "      he   llo Word     ";
console.log(s11.length);
let s12 = s11.trim();
console.log(s12);
console.log(s12.length);

//5.4 string.trimEnd(); xóa bỏ khoản trắng ở cuối chuỗi
let s13 = "      he   llo Word     ";
console.log(s13.length);
let s14 = s13.trimEnd();
console.log(s14);
console.log(s14.length);

//5.5 string.trimStart(); xóa bỏ khoản trắng ở đầu chuỗi
let s15 = "      he   llo Word     ";
console.log(s15.length);
let s16 = s15.trimStart();
console.log(s16);
console.log(s16.length);
