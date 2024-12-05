//Bài 36.5-6 DOM Hiểu rõ GetAttribute và SetAttribute
/*
    I) getAttribute() & setAttribute()
        - getAttribute() là phương thức trả về giá trị của thuộc tính nằm trên phần tử HTML,
        nếu không tìm thấy trả về null
        - setAttribute() là một phương thức để thiết lập giá trị của một thuộc tính cụ thể cho một phần tử HTML. 
    II) hasAttribute() & removeAttribute()
        hasAttribute(): kiểm tra xem một phần tử có thuộc tính được chỉ định không
        removeAttribute(): loại bỏ một thuộc tính khỏi một phần tử HTML


*/

//sử dụng querySelector để truy vấn tới đối tượng cần tìm
const firstLink = document.querySelector("a");
//#8. getAttribute
//Kiểm tra xem thẻ a có dc tìm thấy hay ko
if (firstLink) {
  //Sử dụng get để xem giá trị của một đối tượng
  const linkHref = firstLink.getAttribute("href");
  console.log(linkHref);
} else {
  console.log("Không tìm thấy thẻ a");
}

//#9.setAttribute
//Sử dụng set để thay đổi giá trị của một đối tượng
firstLink.setAttribute("target", "_blank"); //("target", "_blank") : mở 1 trang mới ra 1 tab mới

//sử dụng querySelectAll để chọn tất cả thẻ a trong ul
const links = document.querySelectorAll("ul a");

//get và setAttribute chi có tác dụng với đối tượng riêng biệt
// vì vậy phải lặp qua mỗi thẻ a trong list link
//để thêm thuộc tính target="_blank"
links.forEach((singleLink) => {
  singleLink.setAttribute("target", "_blank");
});

//Đổi màu Style thẻ h1 red -> blue
const getStyleHeading = document.querySelector("#heading_title");
getStyleHeading.setAttribute("style", "color:blue;");

//sử dụng querySelector để lựa chọn phần tử đầu tiên có class là "list"
const item1 = document.querySelector(".list");
//#10.hasAttribute()
//Kiểm tra có phần tử thuộc class không
console.log(item1.hasAttribute("class"));

//chọn phần tử có id: heading_title, kiểm tra xem phần tử này có thuộc tính style ko -> true/false
const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));
//#11.remove()
//Loại bỏ 1 thuộc tính ra khỏi phần tử
//Xóa bỏ thuộc tính style
item2.removeAttribute("style");

//bài tập: xóa toàn bộ thuộc tính href trong các thẻ a nằm trong ul
const itemA = document.querySelectorAll("ul a");
itemA.forEach((tag) => {
  tag.removeAttribute("href");
});
