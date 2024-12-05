//Bài 36.8 DOM Style - Tùy chỉnh CSS
/*
    - Thuộc tính .style cho phép bạn truy cập và thay đổi các thuộc tính CSS của một phần tử HTML
    - Thuộc tính .style cho phép truy cập để xem inline CSS của phần tử (bài 22 CSS)

*/
//chọn phần tử h1
let heading = document.querySelector("h1");
// heading.style.backgroundColor = "cyan";
// heading.style.fontSize = "46px";
// heading.style.color = "red";

//Cách viết gọn nhiều phần tử
//assign cho phép sao chép đối tượng nguồn vào đối tượng đích heading.style
Object.assign(heading.style, {
  backgroundColor: "cyan",
  fontSize: "46px",
  color: "red",
});
