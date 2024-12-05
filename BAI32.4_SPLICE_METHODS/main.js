//Bài 32.4 phương thức splice()
/*
    Splice() là một công cụ mạnh mẽ cho việc thay đổi cấu trúc của mảng
    array.Splice(start, deleteCount, item1, item2,...);
        - start: chỉ định vị trí bắt đầu thay đổi mảng. Nếu là một số âm, nó sẽ đượ tính từ cuối mảng
        - deleteCount: Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu từ vị trí start. 
            (nếu deleteCount là 0, không có phần tử nào bị loại bỏ)
        - item1, item2,..: Các phần tử mới sẽ được thêm vào mảng từ vị trí start

*/
//12.1 Loại bỏ phần tử từ mảng
let arr11 = [1, 2, 3, 4, 5];
//arr11.splice(2, 1); //bắt đầu từ vị trí 2 xóa đi 1 phần tử
arr11.splice(-2, 2); //xóa từ cuối mảng -2 xóa 2 phần tử
console.log(arr11);

//12.2 thay thế phần tử trong mảng
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 1, 6); //bắt đầu từ vị trí 2 xóa 1 ký và thêm phần tử 6 vào vị trí xóa
console.log(arr12);

//12.3 thêm phần tử vào mảng, không xóa
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 0, 6, 7, 8, 9); // bắt đầu từ vị trí 2, xóa 0 phần tử và chèn thêm vào các phần tử 6, 7, 8, 9
console.log(arr13);
