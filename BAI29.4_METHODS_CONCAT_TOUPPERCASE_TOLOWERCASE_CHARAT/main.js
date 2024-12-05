//Bài 29.4 String Methods Concat(), toUpperCase(), toLowerCase(), charAt()
/*
    I) Các phương thức String 
        1. let newString = str1.concat(str2,str3,...,strN); 
            => Nối các chuỗi str2,3,...,N vào chuỗi str1
        2. toUpperCase()
            => Chuyển toàn bộ chuỗi sang in hoa
        3. toLowerCase()
            => Chuyển toàn bộ chuỗi sang in thường
        4. charAt(index)
            => Trả về chuỗi nằm ở vị trí index được truyền vào


 */

//5.6 concat: nối chuỗi
let fistName = "John";
let lastName = "Doe";
let fullName = fistName.concat(" ", lastName);
console.log(fullName);

//5.7 toUpperCase(): Chuyển toàn bộ sang viết hoa
let s18 = "Chào các bạn, tôi hỌC Js";
console.log(s18.toUpperCase());

//5.8 toLowerCase(): Chuyển toàn bộ sang viết thường
console.log(s18.toLowerCase());

//5.9 charAt(index) : Trả về chuỗi nằm ở vị trí index được truyền vào
//string.charAt(index);
let s19 = "abcde";
console.log(s19.charAt(2));
