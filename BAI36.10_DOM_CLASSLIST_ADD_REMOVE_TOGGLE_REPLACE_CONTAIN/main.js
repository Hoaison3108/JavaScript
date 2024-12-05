//Bài 36.10 DOM - Classlist add, remove, toggle, replace, contain
/*
    I) Classlist
        - classList.add() thêm một class mới vào phần tử
        - classList.remove() xóa một Class khỏi phần tử
        - classList.toggle() Loại bỏ một class nếu nó đã tồn tại và thêm nó nếu chưa có
        - classList.replace() Thay thế một class cũ bằng một class mới
        - classList.Contains() kiểm tra xem phần tử cóp chứa một class cụ thể không 
*/

//lây phần tử cần tương tác
let element = document.getElementById("myElement");

//1. Thêm lớp mới vào phần tử
element.classList.add("newClass");

//2. Kiểm tra xem phần tử có chứa lớp cụ thể không
console.log(element.classList.contains("newClass"));

//3. Xóa một class khỏi phần tử
element.classList.remove("myClass");

//4.Thay thế class cũ bằng class mới
element.classList.replace("newClass", "newClass2");

//5.Loại bỏ class nếu đã tồn tại, nếu chưa có thêm class
element.classList.toggle("toggleClass");

//6. Xem các class trên phần tử
console.log(element.classList);
