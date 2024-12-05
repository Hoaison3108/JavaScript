//BÀI 32.2 Array Methods - Mảng các phương thức trong mảng
/*
    II) Các phương thức trong mảng
        1.concat() : Nối mảng hiện tại với mảng khác và trả về một mảng mới
        2.push() : Thêm một hoặc nhiều phần tử vào cuối mảng gốc
        3.unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng gốc
        4.pop() : Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đã bị loại bỏ
        5.shift() : Loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã bị loại bỏ
        6.slice(starIndex, endIndex) : Tạo một bản sao của mảng -> lưu sang 1 vùng nhớ mới
        7.includes() : Kiểm tra xem một mảng có chứa một giá tị cụ thể hay không.
                        trả về TRUE nếu có và FALSE nếu không.
        8.indexOf() : Trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng nếu tìm thấy
                        trả về -1 nếu không tìm thấy
        9.lastIndexOf() : Trả về vị trí index của phần tử xuất hiện lần cuối cùng trong mảng nếu tìm thấy
                            trả về - 1 nếu không tìm thấy
        10.reverse() : Đảo ngược thứ tự của các phần tử trong mảng gốc. Nó thay đổi mảng gốc và không tạo ra mảng mới 
        11.join(separator) : Nối các phần tử trong mảng thành chuỗi, theo ký tự phân tách 'separator' 
                                separator : nếu bỏ trống sẽ mặc định là dấu (,) phương thức này không thay đổi mảng gốc

*/
//1.concat() : Nối mảng hiện tại với mảng khác và trả về một mảng mới
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrNew = [7, 8, 9];
let newArr = arr1.concat(arr2, arrNew); //nối mảng arr2, arrNew vào sau mảng arr1
console.log(newArr);

//2.push() : Thêm một hoặc nhiều phần tử vào cuối mảng gốc
let arr3 = [1, 2, 3];
arr3.push(4, 5); //thay đổi mảng gốc
console.log(arr3);

//3.unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng gốc
let arr4 = [2, 3];
arr4.unshift(0, 1, "nam"); //thay đổi mảng gốc
console.log(arr4);

//4.pop() : Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đã bị loại bỏ
let arr5 = [1, 2, 3, "nam"];
let removedElement = arr5.pop(); //Thay dổi mảng gốc
console.log(arr5);
console.log(removedElement);

//5.shift() : Loại bỏ phần tử đầu tiên của mảng và trả về phần tử đã bị loại bỏ
let arr6 = [1, 2, 3];
let removedElement2 = arr6.shift(); //Thay dổi mảng gốc
console.log(arr6);
console.log(removedElement2);

// 6.slice(start, end) : Tạo một bản sao của mảng từ start đến (end - 1) -> lưu sang 1 vùng nhớ mới
//Cắt chuỗi gốc, lấy từ starIndex đến sát endIndex (endIndex -1) chuỗi gốc (không bao endIndex)
//Bỏ trống sẽ hiểu sao chép lấy toàn bộ mảng gốc sang mảng mới
let arr7 = [1, 2, 3, 4, 5];
//let sliceArr = arr7.slice(); //lấy từ đầu đến hết mảng
//let sliceArr = arr7.slice(1); //lấy từ vị trí index 1 đến hết mảng
let sliceArr = arr7.slice(1, 4); //lấy từ vị trí index 1 đến index 3
console.log(arr7);
console.log(sliceArr);

// 7. includes() : Kiểm tra xem một mảng có chứa một giá tị cụ thể hay không.trả về TRUE nếu có và FALSE nếu không.
let arr8 = [1, 2, 3, 4, 5, "nam"];
let isPresent = arr8.includes("nam"); //Kiểm tra giá trị có "nam" có nằm trong mảng ko trả về True || False
console.log(isPresent);

//8.indexOf() : Trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng nếu tìm thấy trả về -1 nếu không tìm thấy
let arr9 = [1, 2, 3, 4, 5, 6, 2, 6, 7];
let indexElement = arr9.indexOf(2); //Kiểm tra số 2 xuất hiện lần đầu trong mảng có vị trí index là bao nhiêu
console.log(indexElement);

// 9.lastIndexOf() : Trả về vị trí index của phần tử xuất hiện lần cuối cùng trong mảng nếu tìm thấy trả về - 1 nếu không tìm thấy
let arr10 = [1, 2, 3, 4, 5, 6, 2, 6, 7];
let lastIndex = arr10.lastIndexOf(2); //Kiểm tra số 2 xuất hiện lần cuối trong mảng có vị trí index là bao nhiêu
console.log(lastIndex);

//10.reverse() : Đảo ngược thứ tự của các phần tử trong mảng gốc. Nó thay đổi mảng gốc và không tạo ra mảng mới
let arr11 = [1, 2, 3, 5, 7, 9];
arr11.reverse();
console.log(arr11);
//Lưu ý: reverse làm thay đổi mảng gốc
//nếu muốn giữ nguyên mảng gốc, thì tạo bảng sao rồi mới reverse
let arr12 = [1, 3, 5, 7, 9];
let arr13 = arr12.slice().reverse();
console.log(arr12);
console.log(arr13);

//11.join(separator) : Nối các phần tử trong mảng thành chuỗi, theo ký tự phân tách 'separator'
//separator : nếu bỏ trống sẽ mặc định là dấu (,) phương thức này không thay đổi mảng gốc
//không truyền separator(ksy tự phân tách)
let arr14 = ["nam", "trang", 1, 2, 3];
let string1 = arr14.join();
console.log(string1);
console.log(typeof string1);
// có truyền vào separator(có ký tự phân tách)
let arr15 = ["nam", "trang", 1, 2, 3];
let string2 = arr15.join(" % ");
console.log(string2);
console.log(typeof string2);
