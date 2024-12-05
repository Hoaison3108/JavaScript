//Bài 29.7 String js starsWith, endsWith
/*
    I) Methods startsWith(), endsWith()
        1) startsWith(searchValue, [starIndex]);
            => Kiểm tra chuỗi gốc có bắt đầu bằng searchValue không?
        Đúng trả về TRUE, sai trả về FALSE
        startIndex (tùy chọn): vị trí bắt đầu tìm kiếm trong chuỗi.
        Nếu bỏ trống: tìm kiếm sẽ bắt đầu từ đầu chuỗi.
        2) endsWith(searchValue, [endIndex]);
            => Kiểm tra chuỗi gốc có kết thúc bằng searchValue không?
        Đúng trả về TRUE, sai trả về FALSE
        endIndex (tùy chọn): vị trí kế thúc tìm kiếm trong chuỗi gốc.
        Nếu bỏ trống: tìm kiếm đến hết chuỗi gốc.

*/
//5.15 string.startsWith(searchValue,[starIndex]);
/*
Kiểm tra chuỗi gốc có bắt đầu bằng searchValue không?
Đúng trả về TRUE, sai trả về FALSE
startIndex (tùy chọn): vị trí bắt đầu tìm kiếm trong chuỗi.
Nếu bỏ trống: tìm kiếm sẽ bắt đầu từ đầu chuỗi.
*/
let s30 = "abcdef abcdef";
console.log(s30.startsWith("a")); //true

//Tìm vị trí index số 1 xem có phải bắt đầu bằng chuỗi "bc"\
console.log(s30.startsWith("bc", 1)); //true

//5.16 string.endsWith(searchValue, [endIndex]);
/*
Kiểm tra chuỗi gốc có kết thúc bằng searchValue không?
Đúng trả về TRUE, sai trả về FALSE
endIndex (tùy chọn): vị trí kế thúc tìm kiếm trong chuỗi gốc.
Nếu bỏ trống: tìm kiếm đến hết chuỗi gốc.
*/
let s31 = "01234567890";
console.log(s31.endsWith("0")); //true
//endIndex =10, chuỗi được kiểm tra từ index 0 -> 10-1=9
console.log(s31.endsWith("9", 10)); //true

//ví dụ kiểm tra tên tập tin có kết thúc .mp3?
let fileName = "nhac.mp3";

//kiểm tra xem có kết thúc bằng mp3
if (fileName.endsWith(".mp3")) {
  console.log("tập tin là file mp3");
} else {
  console.log("tập tin không là file mp3");
}
